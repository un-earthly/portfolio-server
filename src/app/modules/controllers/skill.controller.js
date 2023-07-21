const skillService = require("../src/services/skill.service")

module.exports = {
    getSkillList: (req, res) => {
        skillService.getSkillList()
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
            })
    },
    insertSkill: (req, res) => {
        skillService.insertSkill(req.body)
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
            })
    },
    updateSkill: (req, res) => {
        skillService.updateSkill(req.body)
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
            })
    },
    deleteSkill: (req, res) => {
        skillService.deleteSkill(req.params.id)
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
            })
    },
}