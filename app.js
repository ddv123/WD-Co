var express    = require("express"),
    nodemailer = require("nodemailer"),
    bodyParser = require("body-parser");

var app = express();

app.set('port', (process.env.PORT || 8080));

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
        user: 'vudavid0@gmail.com',
        clientId: '764085792415-ahvfc4a4kpadnvnb8avul8q1qolj08m4.apps.googleusercontent.com',
        clientSecret: 'uHnxhJuZodV53GdHcK7wZyt3',
        refreshToken: '1/GHEzIw3aFWYZ9YziwAxwWaG-av6ohwnAHyGanReyVNk',
        accessToken: 'ya29.Glt3BeFX2aZcesRtSgwX-L6xCt6wOTf1ORlPJCJKobzGTKWZv5Lqgn1gqPpob0dCb3T3HCZtznQbrEMdyN4VcFMO5gdGYgdfSqe4L3j-hX5o04_bA9ocbHQV0DxH',
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

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("Server Started...");
// });