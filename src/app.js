const express = require("express");
const app = express();
const path = require("path");  
const hbs=require("hbs");
require("./db/conn");
const Register=require("./models/register");
const leader= require("./models/leader")
const { log } = require("console");

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

let int_time=Infinity;
let t0;
let t1;
let time;

let cookname;


app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/story", (req, res) => {
  res.render("story");
});
app.get("/home", (req, res) => {
  res.render("Home");
});
app.get("/story", (req, res) => {
  res.render("story");
});

app.get("/story3", (req, res) => {
  res.render("story3");
});

app.get("/leaderboard",async (req, res) => {
 try {
  const result= await leader.find();
  let kil=result.sort((a, b) => a.time - b.time);
  // res.send(kil)
  const names = kil.map(player => player.name);
  const time=kil.map(player => player.time);
  
  res.render("leaderboard", { names: names, time: time });

 } catch (error) {
  
 }
});

app.post("/register", async(req, res) => {
  try {
    const name=req.body.name;
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
      // cookname=name;
      // t0=performance.now();
      res.status(201).render("Home");
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


app.post("/login", async(req, res) => {
    try {
      const name = req.body.namelog;
      const pass = req.body.passlog;
      const usname=await Register.findOne({name:name});
      
      if(usname.pass===pass){
        // cookname=name;
        // t0=performance.now();
        res.status(201).render("Home");
      }else{
        res.send("password not matching");
      }
    } catch (error) {
      res.status(400).send("Username incorrect")
    } 
});

app.post("/story", async(req,res)=>{
  try {
    const inp1 = req.body.inp1;
    const inp2 = req.body.inp2;
    const inp3 = req.body.inp3;
    const inp4 = req.body.inp4;
    const inp5 = req.body.inp5;
    
    if(inp1==17 && inp2==19 && inp3==23 && inp4==5 && inp5==71){
      console.log("Done lessgo");
      // t1=performance.now();
      // time=(t1-t0)/1000;
      // console.log(time);
      // const led=new leader({
      //   name:cookname,
      //   time:time
      // })
      // await led.save()
      res.redirect("story3")
    }else{
      console.log("no");
    }
  } catch (error) {
    res.status(400).send(error);
  }
})

// app.post("/story3", async(req,res)=>{
//   try {
    
//   } catch (error) {
//     res.status(400).send(error)
//   }
// })

