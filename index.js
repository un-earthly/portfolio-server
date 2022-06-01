import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import Mongodb from "mongodb"
const { MongoClient, ServerApiVersion } = Mongodb;
const app = express()
const port = 80 || process.env.PORT

const uri = `mongodb+srv://${process.env.MONGO__ADMIN}:${process.env.MONGO__PASS}@cluster0.ha0ln.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
app.use(cors())
app.use(express.json())
async function run() {
    try {
        client.connect()
        const messageCollection = client.db("user").collection("message");

        app.post("/message", async (req, res) => {
            res.send(await messageCollection.insertOne(req.body))
        })


    } finally {
        await client.close();
    }
}
run().catch(console.dir);
app.get("/", (req, res) => {
    res.send("portfolio server is up n running")
})

app.listen(port)