const projectService = require("../services/project.service")

module.exports = {
    getProjectList: (req, res) => {
        projectService.getProjectList()
            .then((data) => {
                return res.status(200).json({
                    status: 200,
                    data,
                    message: "Products loaded successfully",
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    message: "Error loading products",
                    error: err.message,
                });
            });



    },
    insertProject: (req, res) => {
        projectService.insertProject(req.body)
            .then((data) => {
                return res.status(200).json({
                    status: 200,
                    data,
                    message: "Products loaded successfully",
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    message: "Error loading products",
                    error: err.message,
                });
            });
    }
}