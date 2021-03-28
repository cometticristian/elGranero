module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
        },
        description: {
            type: dataTypes.STRING,
        },
        release_date: {
            type: dataTypes.DATE,
        },
        price: {
            type: dataTypes.DOUBLE,
        },
        off: {
            type: dataTypes.INTEGER,
        },
        stock: {
            type: dataTypes.INTEGER,
        }
    }
    let config = {
        tableName: 'products',
        timestamps: false
    }

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {

        Product.hasMany(models.Image,{
            as: "Image",
            foreignKey: "product_id",
            timestamps: "false"
        });

        Product.belongsTo(models.Margin,{
            as: "Margin",
            foreignKey: "margins_id",
            timestamps: "false"
        });

        Product.belongsTo(models.Selling_way,{
            as: "Selling_way",
            foreignKey: "selling_ways_id",
            timestamps: "false"
        });
    }

    return Product;

}