const express  = require('express');
const app = express();
const session = require('express-session');
const mongoose = require('./db/mongoose');
const User = require('./db/models/users');

app.use(express.json());
app.use(session({secret: 'avidestroyer', resave: true, saveUninitialized: true}));

var cors = require('cors');
app.use(cors());

app.get('/users', (req, res) => {
    User.find({})
        .then(users => res.send(users))
        .catch((error) => console.log(error));
});

app.post('/login', (req, res) => {
    User.findOne({email: req.body.email, password: req.body.password}, (err, user) => {
        if(err) {
            console.log(err);
            return res.status(500).send();
        }
        if(!user) return res.status(404).send();
        req.session.user = user;
        console.log(req.session.user);
        return res.status(200).send({msg: "Successfully logged in"});
    });
});

app.post('/register', (req, res) => {
    /*(new User({
        'fname': req.body.fname,
        'lname': req.body.lname,
        'email': req.body.email,
        'password': req.body.password
    })).save()
    .then(users => res.send(users))
    .catch(error => {
        console.log(error);
        res.status(401).send(error);
    });*/
    // res.status(200).send({msg: 'Successfully registered'});
    res.status(200).send({msg: 'Error occurred from server'});
});

app.get('/account', (req, res)=>{
    if(!req.session.user) return res.status(401).send();
    return res.status(200).send({msg: "Welcome to secret account page"});
});

app.listen(3000, () => console.log('Server is running...'));