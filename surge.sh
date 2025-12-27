#!/bin/bash

# Build the project
npm run build

# Deploy to Surge.sh
# Install surge globally: npm install -g surge
# Run this script: ./surge.sh

echo "Building project..."
npm run build

echo "Deploying to Surge.sh..."
echo "Make sure you have surge installed globally: npm install -g surge"

# Copy index.html to 200.html for SPA routing
cp dist/index.html dist/200.html

# Deploy (you'll be prompted for domain name on first run)
surge dist/