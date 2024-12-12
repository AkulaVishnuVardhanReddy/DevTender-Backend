const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://Vishnu:chintu@cluster0.hyys0.mongodb.net/";
const client = new MongoClient(uri);

async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");

        // Access your database
        const db = client.db("Akshay");
        const collection = db.collection("User");

        // Insert a document
        const result = await collection.insertOne({ name: "Alice", age: 25 ,city:"chennai"});
        console.log("Inserted document:", result);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

connectDB();
