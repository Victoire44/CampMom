
const db = require("../db/models");


module.exports = {
    
    create: function (req, res) {
        console.log(`Creating User ${req.body.id}`)
        console.log(req.body);
        db.Users.create({
            uuid: req.body.uuid, // TODO: Provide the auth user here
            name: req.body.name,
            email: req.body.email
        })
            .then(function (response) {
                res.sendStatus(200)
            }).catch(function (err) {
                console.error(err.original.sqlMessage)
                res.sendStatus(400)
            });
    },
    
};