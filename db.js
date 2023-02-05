const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.MONGO__ADMIN}:${process.env.MONGO__PASS}@cluster0.ha0ln.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

function connectToDb() {
    try {

        client.connect()

        console.info("connection established")

    } catch (err) {
        console.log(err)
    }

}

function getDb(dbName, collectionName) {
    connectToDb()
    const dbCollections = client.db(dbName).collection(collectionName)
    return dbCollections
}

const messageCollection = getDb("user", "message");
const skillCollection = getDb("adm", "skill");
const projectCollection = getDb("adm", "project");

module.exports = {
    connectToDb,
    getDb,
    messageCollection,
    skillCollection,
    projectCollection
}