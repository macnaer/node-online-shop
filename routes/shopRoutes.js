const {get404, getHomePage, getCategoryPage, getContactPage, getSingleProductPage, getCheckoutPage} = require("../controllers/shopController")

const express = require("express");
const router = express.Router();

router.get("/", getHomePage);
router.get("/category", getCategoryPage);
router.get("/contact", getContactPage);
router.get("/single-product", getSingleProductPage)
router.get("/checkout", getCheckoutPage)
router.get("*", get404)

module.exports = router;