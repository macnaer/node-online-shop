const express = require("express");

// Include shop routes
const shopRoutes = require("./routes/shopRoutes");

const PORT = 8000;
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

// Use Middleware
app.use(shopRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
