const express = require("express");
const app = express();
const path = require("path");
const hbs=require("hbs");
require("./db/conn")
const Register=require("./models/register")

const port=process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const views_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");


app.use(express.json());
app.use(express.urlencoded({extended:false}));
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

app.post("/register", async(req, res) => {
  try {
    const password = req.body.pass;
    const confirmpass= req.body.confirmpass;
    if(password===confirmpass){

      const rgisterEmployee=new Register({
        name:req.body.name,
        pass:req.body.pass,
        confirmpass:req.body.confirmpass,
        gender:req.body.gender
      })

      const registered=await rgisterEmployee.save();
      res.status(201).render("index");

    }else{
      res.send("password not matching");
    }
  } catch (error) {
    res.status(400).send(error);
    
  }
});


app.listen(port, () =>{
    console.log(`Server is up on port ${port}`);
});

