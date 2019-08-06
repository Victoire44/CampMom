const db = require("../db/models");

module.exports = {
    findAll: function (req, res) {
        console.log("Getting all favorites")
        db.Favorites.findAll({
            where: {
                userId: "userId", // TODO: Get the user from the auth
            }
        }).then(function (favorites) {
            res.json(favorites.map(favorite => {
                return { parkCode: favorite.parkCode, campgroundId: favorite.campgroundId }
            }))
        });
    },
    create: function (req, res) {
        console.log(`Creating favorite ${req.body.id}`)
        db.Favorites.create({
            userId: "userId", // TODO: Provide the auth user here
            parkCode: req.body.parkCode,
            campgroundId: req.body.id
        })
            .then(function (response) {
                res.sendStatus(200)
            }).catch(function (err) {
                console.error(err.original.sqlMessage)
                res.sendStatus(400)
            });
    },
    remove: function (req, res) {
        console.log(`Removing favorite ${req.params.id}`)
        db.Favorites.destroy({
            where: {
                // userId: req.params.user,
                campgroundId: req.params.id
            }
        }).then(function () {
            res.sendStatus(200)
        }).catch(function (err) {
            console.error(err.original.sqlMessage)
            res.sendStatus(400)
        });
    }
};