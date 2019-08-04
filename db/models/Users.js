module.exports= function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        uuid: {
            type: DataTypes.UUID,
            allowNull: false
        },
        //firebase will handle password
        trips: [
            {
            type: DataTypes.STRING,
            allowNull: false
        }
    ],
        invitedTo: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        favs: [
            {
            type: DataTypes.STRING,
            allowNull: true
        }
    ]
    });
    User.associate = function(models) {

        User.hasMany(models.Trips, {
        });

    };

    return User;
}