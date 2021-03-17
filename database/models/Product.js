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
        type: {
            type: dataTypes.STRING,
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
    }

    return Product;

}