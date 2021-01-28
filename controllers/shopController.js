exports.getHomePage = (req, res, next) => {
    res.render("pages/index");
}
exports.getAboutPage = (req, res, next )  => {
    res.render("pages/about");
}
exports.getVacanciesPage = (req,res, next) => {
    res.send("<h1>Vacancies page!</h1>")
}
exports.getContactPage = (req,res, next) => {
    res.send("<h1>Contact page!</h1>")
}