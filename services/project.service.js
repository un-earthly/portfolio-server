const { projectCollection } = require("../db")

module.exports = {
    getProjectList: async () => {
        const data = await projectCollection.find().toArray()
        return data;
    },
    insertProject: async (projectData) => {
        const data = await projectCollection.insertOne(projectData)
        return data;
    }
}