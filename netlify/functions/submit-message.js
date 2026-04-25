import { MongoClient } from 'mongodb';

/**
 * Netlify serverless function – POST /api/submit-message
 *
 * Receives { name, email, message } and inserts into MongoDB Atlas.
 *
 * Required env var in Netlify dashboard → Site → Environment variables:
 *   MONGODB_URI = mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
 */

let cachedClient = null;

async function getClient() {
  if (cachedClient) return cachedClient;

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URI is not configured. Add it in Netlify → Site → Environment variables.');
  }

  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 8000,
    connectTimeoutMS: 8000,
  });

  await client.connect();
  cachedClient = client;
  return client;
}

export const handler = async (event) => {
  // CORS headers so the browser doesn't block the response
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  // Parse body
  let data;
  try {
    data = JSON.parse(event.body ?? '{}');
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid JSON body' }) };
  }

  const { name, email, message } = data;

  // Server-side validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'name, email, and message are required' }) };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid email address' }) };
  }

  try {
    const client = await getClient();
    const collection = client.db('portfolio').collection('messages');

    await collection.insertOne({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      createdAt: new Date(),
    });

    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };

  } catch (err) {
    // Reset cached client so the next request gets a fresh connection
    cachedClient = null;

    console.error('[submit-message] Error:', err.message);

    // Distinguish config errors from runtime errors
    if (err.message.includes('MONGODB_URI')) {
      return {
        statusCode: 503,
        headers,
        body: JSON.stringify({ error: 'Service not configured. Please try again later.' }),
      };
    }

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to save message. Please try again.' }),
    };
  }
};
