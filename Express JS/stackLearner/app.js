const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const pollCrontroller = require('./pollController');

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/create', pollCrontroller.createPollGetController);
app.post('/create', pollCrontroller.createPollPostController)

app.get('/polls/:id', pollCrontroller.viewPollGetController);
app.post('/polls/:id', pollCrontroller.viewPollPostController);
app.get('/polls', pollCrontroller.getAllPolls);

app.get('/', (req, res) => {
    res.render('home');
})

const dbURI = 'mongodb+srv://saqib:saqib123@nodetuts.qikfw.mongodb.net/saqib-poll?retryWrites=true&w=majority';

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(4545, () => {
            console.log("server started on port: 4545");
        });
    })
    .catch(err => {
        console.log(err);
    });