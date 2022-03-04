require('dotenv').config();
const express = require("express");
var mysql = require('mysql');


const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));


     
var connection = mysql.createConnection({
      host     : process.env.MYSQL_HOST,
      user     : process.env.MYSQL_USER,
      password : process.env.MYSQL_PASSWORD,     
      database : process.env.MYSQL_DATABASE   
    });




app.get("/", function(req, res){
    const q = "SELECT COUNT(*) AS count FROM users";
	  connection.query(q, function(err, results){
		  if (err) throw err;
		  const count = results[0].count;
		  res.render("home", {count: count});
	  });
});

app.post("/register", function(req, res){
    const person = {
        email: req.body.email
    };
    connection.query('INSERT INTO users SET ?', person, function(err, result) {
        if (err) throw err;
        res.redirect("/");
    });
});

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`working on ${port}`)
});

