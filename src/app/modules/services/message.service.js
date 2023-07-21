const { ObjectId } = require("mongodb");
const { messageCollection, connectToDb } = require("../db");
module.exports = {
    getMessageList: async () => {
        const data = await messageCollection.find().toArray()
        return data
    },
    insertMassage: async (message) => {
        const data = await messageCollection.insertOne(message)
        return data
    },
    updateMassage: async (id) => {
        const updateDoc = {
            $set:
            {
                status: "replied"
            }
        }
        const data = await messageCollection.updateOne({ _id: ObjectId(id) }, updateDoc)
        return data
    },
    deleteMessage: async (id) => {
        const data = await messageCollection.deleteOne({ _id: ObjectId(id) })
        return data

    },

}