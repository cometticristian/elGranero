module.exports = (sequelize, dataTypes) => {
    let alias = 'Margin';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        margin: {
            type: dataTypes.DOUBLE,
        }
    }
    let config = {
        tableName: 'margins',
        timestamps: false
    }

    let Margin = sequelize.define(alias, cols, config);

    Margin.associate = function(models) {
        Margin.hasMany(models.Product,{
            as: "Margin",
            foreignKey: "margins_id",
            timestamps: "false"
        });
    }

    return Margin;

}