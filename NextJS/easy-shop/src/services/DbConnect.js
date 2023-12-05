/** @format */

import { MongoClient, ServerApiVersion } from "mongodb";
/**
 * @type {import("mongodb").db}
 */
let db;

const DbConnect = async () => {
    if (db) return db;
    try {
        const uri = `mongodb+srv://database:tVNs5ygHmPOh9h4d@cluster0.prjizah.mongodb.net/?retryWrites=true&w=majority`;
        console.log(uri);
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            },
        });
        db = client.db("easy-shop");
        await client.db("admin").command({ ping: 1 });
        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!"
        );
        return db;
    } catch (error) {
        console.log(error.message);
    }
};

export default DbConnect;

/////// tVNs5ygHmPOh9h4d
