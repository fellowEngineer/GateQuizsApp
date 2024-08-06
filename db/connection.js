import { MongoClient } from 'mongodb';

// Replace the following with your MongoDB connection string
const uri = process.env.DB_URI;
let client;

async function connectToDatabase() {
    if (client && client.isConnected()) {
        return client.db();
    }
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to database');
    return client.db();
}

export default connectToDatabase;
