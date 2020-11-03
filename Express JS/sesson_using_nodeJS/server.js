const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const { Router } = require('express');
const router = express.Router();
const app = express();

// initialize the session
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+'/views'));

var sess; // though global session is not recommended

app.get('/', (req, res) => {
    sess = req.session;
    if(sess.email){
        res.redirect('/admin');
    }
    res.sendFile('index.html');
});

router.post('/login', (req, res) => {
    sess = req.session;

    sess.email = req.body.email;
    res.end('done');
});

router.get('/admin', (req, res) => {
    sess = req.session;
    if(sess.email){
        res.write(`<h1>Hello ${sess.email} </h1><br>`);
        res.end('<a href='+'/logout'+'>Logout</a>');
    }
    else {
        res.write('<h1>Please login first.</h1>');
        res.end('<a href='+'/'+'>Login</a>');
    }
});

router.get('/logout', (req, res) => {
    sess.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        res.redirect('/');
    });
});

app.use('/', router);

app.listen(process.env.PORT || 3000, () => {
    console.log(`server started at ${process.env.PORT || 3000}`);
});