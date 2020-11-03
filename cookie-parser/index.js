const express = require('express');
const cookieParser = require('cookie-parser');

// setup express app
const app = express();

//middleware
app.use(cookieParser());

// basic route for homepage
app.get('/', (req, res) => {
	res.send('welcome to express app');
});

// JSON object to be added to cookie
let users = {
	name: "Saqib",
	age: '19'
}

// Route for adding cookie
app.get('/setuser', (req, res) =>{
	res.cookie('userData', users);
	res.send('user data added to cookie');
});

// Itarete users data from cookie
app.get('/getuser', (req, res) => {
	// show all the cookie
	res.send(req.cookies);
});

// Route for destryoing cookie
app.get('/logout', (req, res) => {
	res.clearCookie('userData');
	res.send('user logout successfuly');
});

app.listen(3000, (err) => {
	if(err) console.log(err);
	console.log("listening port at 3000");
});