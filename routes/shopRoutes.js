const { request } = require("express");

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("<h1>Home page!</h1>")
});

router.get("/about", (req, res, next) => {
    res.send("<h1>About page!</h1>")
});

router.get("/vacancies", (req, res, next) => {
    res.send("<h1>Vacancies page!</h1>")
});
router.get("/contact", (req, res, next) => {
    res.send("<h1>Contact page!</h1>")
});

module.exports = router;