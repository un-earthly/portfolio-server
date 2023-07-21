const { skillCollection } = require("../db")

module.exports = {
    getSkillList: async () => {
        const data = await skillCollection.find().toArray()
        return data
    },
    insertSkill: async (skillData) => {
        const data = await skillCollection.insertOne(skillData)
        return data
    },
    updateSkill: async (updateData) => {

        // const updateDoc = {
        //     $set:
        //     {
        //         status: "replied"
        //     }
        // }
        // res.send(await messageCollection.updateOne({ _id: ObjectId(req.params.id) }, updateDoc))
        console.log(updateData)
    },
    deleteSkill: async (id) => {
        const data = await skillCollection.deleteOne({ _id: ObjectId(id) })
        return data
    }
}