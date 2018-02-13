var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render('home');
});

app.get("/capabilities", function(req, res){
    res.render("capabilities");
    
});

app.get("/work", function(req, res){
    res.render('work');
});

app.get("/about", function(req, res){
    res.render('about');
})

app.get("/contact", function(req, res){
    res.render('contact');
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started...");
});