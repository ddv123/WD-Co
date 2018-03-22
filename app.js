require('dotenv').config();

var express    = require("express"),
    nodemailer = require("nodemailer"),
    bodyParser = require("body-parser");

var app = express();

// view engine setup   

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


// body Parser middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


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
});

app.get("/contact", function(req, res){
    res.render('contact');
});

app.post("/send", function(req, res){
    
    var output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>  
        <ul>
            <li>${req.body.name}</li>
            <li>${req.body.company}</li>
            <li>${req.body.email}</li>
            <li>${req.body.phone}</li>
        </ul>
        <h3>Project Types</h3>
        <ul>
            <li>${req.body.brand}</li>
            <li>${req.body.logo}</li>
            <li>${req.body.uiux}</li>
            <li>${req.body.web}</li>
            <li>${req.body.seo}</li>
            <li>${req.body.socialmedia}</li>
            <li>${req.body.digitalmarketing}</li>
            <li>${req.body.notsure}</li>
        </ul>
        <h3>Message</h3>
        <p> ${req.body.message}</p>
    `;

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SEC,
        refreshToken: process.env.REF_TOK,
        accessToken: process.env.ACS_TOK
      }
    });
    
    var mailOptions = {
        from: 'WDCompany <vudavid0@gmail.com>',
        to: 'vudavid0@gmail.com',
        subject: 'Message from WD',
        text: 'You have a new message:',
        html: output
    };
   
    transporter.sendMail(mailOptions, function (err, info){
        if(err){
            console.log(err);
        } 
        console.log('Message sent: %s', info.messageId);
        res.redirect("thanks");
    });
    
    
    
});


app.get("/coming-soon", function(req, res){
    res.render('coming');
});

app.get("/thanks", function(req, res){
    res.render('thanks');
});

app.get("/google95533de7a3269373", function(req, res){
    res.render("google95533de7a3269373");
})

app.get("/sitemap.xml", function(req,res){
    res.render("sitemap");
})

app.listen(process.env.HOST, function() {
  console.log("Server Started...");
});