const express = require("express");
const app = express();
const faker = require('faker');

//app.set("view engine", "ejs");


app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

app.get("/", function(req,res){
  res.render("index.ejs");
});

app.get("/gamecompanies", function(req,res){
  res.render("gamecompanies.ejs", {"fakeCompanyName": faker.company.companyName()});
});

app.get("/populargames", function(req,res){
  res.render("populargames.ejs")
});

app.get("/howto", function(req,res){
  res.render("howto.ejs", {"fakeProduct": faker.commerce.productName()});
});



//server listener
//app.listen("8081", "0.0.0.0", function(){
  // console.log("Express Server is Running...")
//});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express Server is Running...")
 });