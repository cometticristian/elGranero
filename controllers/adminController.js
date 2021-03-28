let db = require('../database/models');

const controller = {

    root: (req, res, next) => {

            db.Product.findAll(
                {
                    include:[{ association: "Image" }, { association: "Margin" }, { association: "Selling_way" }]
                }
            )
            .then(function(products) {
                res.render('./products/adminProducts', {products:products})
            })
            .catch((error) => {
                console.log(error);
            })
    }

}

module.exports = controller;