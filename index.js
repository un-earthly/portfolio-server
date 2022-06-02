import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import Mongodb, { ObjectId } from "mongodb"
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
        const skillCollection = client.db("adm").collection("skill");
        const projectCollection = client.db("adm").collection("project");

        app.get("/message", async (req, res) => {
            res.send(await messageCollection.find().toArray())
        })
        app.post("/message", async (req, res) => {
            res.send(await messageCollection.insertOne(req.body))
        })
        app.patch("/message/:id", async (req, res) => {
            const updateDoc = { $set: { status: "replied" } }
            res.send(await messageCollection.updateOne({ _id: ObjectId(req.params.id) }, updateDoc))
        })
        app.delete("/message/:id", async (req, res) => {
            res.send(await messageCollection.deleteOne({ _id: ObjectId(req.params.id) }))
        })
        app.get("/skill", async (req, res) => {
            res.send(await skillCollection.find().toArray())
        })
        app.post("/skill", async (req, res) => {
            res.send(await skillCollection.insertOne(req.body))
        })
        app.get("/project", async (req, res) => {
            res.send(await projectCollection.find().toArray())
        })
        app.post("/project", async (req, res) => {
            res.send(await projectCollection.insertOne(req.body))
        })


    } finally {

    }
}
run().catch(console.dir);
app.get("/", (req, res) => {
    res.send("portfolio server is up n running")
})

app.listen(port)