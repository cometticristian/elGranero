let db = require('../database/models');

const controller = {

    root: (req, res, next) => {

            db.Product.findAll(
                {
                    include:[{ association: "Image" }]
                }
            )
            .then(function(products) {
                res.render('products', {products:products})
            })
            .catch((error) => {
                console.log(error);
            })
    }

}

module.exports = controller;