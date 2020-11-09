const express = require('express');
const mysql = require('mysql');

// create connection
const db = mysql.createConnection({
    hst: "localhost",
    user: "root",
    password: "",
    database: "nodemysql"
});



// connect
db.connect((err) => {
    if(err) {
        throw err;
    } else {
        console.log('mysql connected...');
    }
});

const app = express();

// create table
app.get('/createposttable', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts table created...');
    });

});

// Insert data post 1
app.get('/addpost1', (req, res) => {
    let post = {title: 'Post One', body: 'This Is Post Number One'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post One Added...');
    });
});

// Insert data post 2
app.get('/addpost2', (req, res) => {
    let post = {title: 'Post Two', body: 'This Is Post Number Two'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post Two Added...');
    });
});

// Select posts
app.get('/getPosts', (req, res) => {
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify(results));
    });
})

// Select Single post
app.get('/getpost/:id', (req, res) => {
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

// Update post
app.get('/updatepost/:id', (req, res) => {
    let newTitle = 'Updated title';
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;

    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

// Delete post
app.get('/deletepost/:id', (req, res) => {
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

// create db
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Datbase created...');
    });
});


app.listen('3000', () => {
    console.log('Server started at port 3000');
})