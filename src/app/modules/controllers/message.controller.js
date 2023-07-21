const massageService = require("../services/message.service")

module.exports = {
    getMessageList: (req, res) => {
        massageService.getMessageList()
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
    insertMassage: (req, res) => {
        massageService.insertMassage(req.body)
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
    updateMassage: (req, res) => {
        massageService.insertMassage(req.params.id)
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
    deleteMassage: (req, res) => {
        massageService.deleteMessage(req.params.id)
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
}