const {get404, getHomePage, getCategoryPage, getContactPage,
     getSingleProductPage, getCheckoutPage, getProduct} = require("../controllers/shopController")

const express = require("express");
const router = express.Router();

router.get("/", getHomePage);
router.get("/category", getCategoryPage);
router.get("/contact", getContactPage);
router.get("/single-product", getSingleProductPage)
router.get("/checkout", getCheckoutPage)
router.get("/products/:productId", getProduct)
router.get("*", get404)

module.exports = router;