let db = require('../database/models');

const controller = {

    root: (req, res, next) => {

            db.Product.findAll(
                {
                    include:[{ association: "Image" }, { association: "Margin" }, { association: "Selling_way" }]
                }
            )
            .then(function(products) {
                res.render('index', {products:products})
            })
            .catch((error) => {
                console.log(error);
            })
    },

    about: (req, res, next) => {
        res.render('about');
    },

    contact: (req, res, next) => {
        res.render('contact');
    },

    terms: (req, res, next) => {
        res.render('terms');
    }
}

module.exports = controller;