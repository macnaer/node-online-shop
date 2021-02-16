const Product = require("../models/product");

exports.getHomePage = (req, res, next) => {
    res.render("pages/index");
}
exports.getCategoryPage = (req, res, next )  => {
    Product.findAll()
    .then(([rows, fildData]) =>{
        console.log("Data from DB ", rows);
        res.render("pages/category");
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