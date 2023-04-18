const express = require("express");
const app = express();
const path = require("path");
const hbs=require("hbs");
require("./db/conn")


const port=process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const views_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");


app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", views_path);
hbs.registerPartials(partial_path);


app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});



app.listen(port, () =>{
    console.log(`Server is up on port ${port}`);
});

