module.exports = function (sequelize, DataTypes) {
    var Favorites = sequelize.define(
        "Favorites",
        {
            parkCode: DataTypes.STRING,
            campgroundId: DataTypes.STRING,
            userId: DataTypes.STRING
        },
        {
            indexes: [
                {
                    fields: ["parkCode", "campgroundId", "userId"],
                    unique: true // Force uniqueness on the combination of campgroundId and userId
                }
            ]
        });

    return Favorites;
};
