import { MongoClient } from 'mongodb';

/**
 * Netlify serverless function – POST /api/submit-message
 *
 * Receives { name, email, message } and inserts into MongoDB Atlas.
 *
 * Required environment variable (set in Netlify dashboard → Site → Environment variables):
 *   MONGODB_URI  –  your Atlas connection string, e.g.
 *                   mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
 */

// Reuse the MongoClient across warm invocations (connection pooling)
let cachedClient = null;

async function getClient() {
  if (cachedClient) return cachedClient;

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URI environment variable is not set.');
  }

  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 5000,
  });

  await client.connect();
  cachedClient = client;
  return client;
}

export const handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  // Parse body
  let data;
  try {
    data = JSON.parse(event.body ?? '{}');
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON body' }),
    };
  }

  const { name, email, message } = data;

  // Basic server-side validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'name, email, and message are required' }),
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid email address' }),
    };
  }

  try {
    const client = await getClient();
    const db = client.db('portfolio');
    const collection = db.collection('messages');

    await collection.insertOne({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      createdAt: new Date(),
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error('MongoDB insert error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to save message. Please try again.' }),
    };
  }
};
