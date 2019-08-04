module.exports = function (sequelize, DataTypes) {
    var Favorites = sequelize.define(
        "Favorites",
        {
            campgroundId: DataTypes.STRING,
            userId: DataTypes.STRING
        },
        {
            indexes: [
                {
                    fields: ['campgroundId', 'userId'],
                    unique: true // Force uniqueness on the combination of campgroundId and userId
                }
            ]
        });

    return Favorites;
};
