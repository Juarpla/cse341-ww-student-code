const { MongoClient } = require("mongodb");

const runMongo = async () => {
    const mongoUri = process.env.DATABASE_URL;

    const client = new MongoClient(mongoUri);

    try {
        await client.connect();
        //for queries
        await client.db("admin").command({ ping: 1 });
        console.log(
          "Pinged your deployment. You successfully connected to MongoDB!"
        );
    } catch (error) {
        console.error(error);   
    } finally {
        await client.close();
    }
}

module.exports = runMongo;