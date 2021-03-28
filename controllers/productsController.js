let db = require('../database/models');

const controller = {

    root: (req, res, next) => {

            db.Product.findAll(
                {
                    include:[{ association: "Image" }, { association: "Margin" }, { association: "Selling_way" }]
                }
            )
            .then(function(products) {
                res.render('./products/products', {products:products})
            })
            .catch((error) => {
                console.log(error);
            })
    },

    detail: (req, res, next) => {

        let id = req.params.productId;

        db.Product.findByPk(id,
            {
                include:[{ association: "Image" }, { association: "Margin" }, { association: "Selling_way" }]
            }
        )
        .then(function(product) {
            res.render('./products/productDetail', {product})
        })
        .catch((error) => {
            console.log(error);
        })
    },

    create: (req, res, next) => {

        let margins = db.Margin.findAll();

        let sellingWays = db.Selling_way.findAll();

        Promise.all([margins, sellingWays])
        
        .then(function ([margins, sellingWays]) {
            res.render('./products/productCreate', {
                margins: margins, sellingWays: sellingWays})
        })
        .catch(function (error) {
            console.log(error);
        })
    },

    edit: (req, res, next) => {

        let id = req.params.productId;

        let margins = db.Margin.findAll();
        let sellingWays = db.Selling_way.findAll();
        let product = db.Product.findByPk(id,
            {
                include:[{ association: "Image" }, { association: "Margin" }, { association: "Selling_way" }]
            }
        )

        let images = db.Image.findAll({
                where: {
                    product_id: id
                }
            }
        )

        Promise.all([margins, sellingWays, product, images])
        
        .then(([margins, sellingWays, product, images]) => {
            res.render('./products/editProduct', {margins, sellingWays, product, images})
        })
        .catch((error) => {
            console.log(error);
        })
    }

}

module.exports = controller;