exports.getHomePage = (req, res, next) => {
    res.render("pages/index");
}
exports.getCategoryPage = (req, res, next )  => {
    res.render("pages/category");
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