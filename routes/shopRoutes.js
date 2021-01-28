const { getHomePage, getAboutPage, getVacanciesPage, getContactPage } = require("../controllers/shopController")

const express = require("express");
const router = express.Router();

router.get("/", getHomePage);
router.get("/about", getAboutPage);
router.get("/vacancies", getVacanciesPage );
router.get("/contact", getContactPage);

module.exports = router;