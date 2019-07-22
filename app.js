const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

app.get("/", function(req,res){
  res.render("index.html");
});

app.get("/gamecompanies", function(req,res){
  res.render("gamecompanies.html");
});

app.get("/populargames", function(req,res){
  res.render("populargames.html");
});

app.get("/howto", function(req,res){
  res.render("howto.html");
});
//server listener
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Express Server is Running...")
});