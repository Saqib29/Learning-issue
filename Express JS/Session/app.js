const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

app.get('/', (req, res) => {
    if(req.session.page_view){
        req.session.page_view++;
        res.send("You visited this page "+ req.session.page_view+" times.");
    } else {
        req.session.page_view = 1;
        res.send("Welcome this page for the first time.");
    }
});

app.listen(3000, () => console.log('server started at 3000'));