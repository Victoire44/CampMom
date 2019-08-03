// const db = require("../models");


module.exports = {
    findAll: function (req, res) {
        console.log("Getting all favorites")
        res.json([])
    },
    create: function (req, res) {
        console.log(`Creating favorite ${req.body.id}`)
        res.sendStatus(200)
    },
    update: function (req, res) {
        console.log(`Updating favorite ${req.params.id}`)
        res.sendStatus(200)
    },
    remove: function (req, res) {
        console.log(`Removing favorite ${req.params.id}`)
        res.sendStatus(200)
    }
};