module.exports = function(sequelize, DataTypes) {
    var Trips = sequelize.define("Trips", {
        location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 50]
            }
        },
        desc: {
            type:  DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 100]
            }
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true
            }
        },
        uuid: {
            type: DataTypes.UUID,
            allowNull: false
        } 
    });
    Trips.associate = function(models) {
        Trips.belongsTo(models.User, {
        });
    };

    return Classes;
};