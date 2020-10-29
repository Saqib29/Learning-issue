const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');


const app = express();


// Init middleware
// app.use(logger);

// Body Parser Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


 // Members API Routes
 app.use('/api/members', require('./routes/api/members'));









/*
app.get('/', (req, res) => {
    //res.send('<h1>Hello Saqib!!</h1>');
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});*/






/*  this means if this port is busy, then "process.env.PORT" 
    will search another port on the server*/
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

