const Product = require("../models/product");

exports.getHomePage = (req, res, next) => {
    res.render("pages/index");
}
exports.getCategoryPage = (req, res, next )  => {
    Product.findAll()
    .then((products) =>{
        res.render("pages/category", {
            products: products,
        });
    })
    .catch(err => console.log(err));
}
exports.getContactPage = (req,res, next) => {
    res.render("pages/contact")
}

exports.getSingleProductPage = (req,res, next) => {
    res.render("pages/single-product.ejs")
}

exports.getCheckoutPage = (req,res,next ) => {
    res.render("pages/checkout.ejs");
}
exports.get404 = (req, res, next) => {
    res.status(404).render("pages/404.ejs");
};