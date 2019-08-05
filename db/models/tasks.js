module.exports = function(sequelize, DataTypes) {
    var Tasks = sequelize.define("Tasks", {
        uuid: {
            type: DataTypes.UUID,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: false
        } 
    });
    Tasks.associate = function(models) {
        Tasks.belongsTo(models.Trips, {
        });
    };
    return Tasks;
};