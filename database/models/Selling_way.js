module.exports = (sequelize, dataTypes) => {
    let alias = 'Selling_way';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        way: {
            type: dataTypes.STRING,
        }
    }
    let config = {
        tableName: 'selling_ways',
        timestamps: false
    }

    let Selling_way = sequelize.define(alias, cols, config);

    Selling_way.associate = function(models) {
        Selling_way.hasMany(models.Product,{
            as: "Product",
            foreignKey: "selling_ways_id",
            timestamps: "false"
        });
    }

    return Selling_way;

}