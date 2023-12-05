/** @format */
import { MongoClient, ServerApiVersion } from "mongodb";
/**
 * @type {import("mongodb").db}
 */
let db;

const DbConnect = async () => {
    if (db) return db;
    try {
        const uri = `mongodb+srv://${process.env.DBN}:${process.env.DBP}@cluster0.prjizah.mongodb.net/?retryWrites=true&w=majority`;

        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            },
        });
        db = client.db("easy-shop");
        await client.db("easy-shop").command({ ping: 1 });
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
