/*
if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
*/



const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const passport = require('passport');
const initializePassport = require('./passport-config');
const flash = require('express-flash')
/*
const session = require('express-session')
*/
const methodOverride = require('method-override')

initializePassport(
    passport, 
    email =>  users.find(user =>  user.email === email) ,
    id => users.find(user =>  user.id === id)
    );


const users = []; //our users array

app.set('view-engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(flash())
app.use(methodOverride('_method'))
/*
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
*/
app.use(passport.initialize());
/*
app.use(passport.session());
*/
app.get('/', checkAuthenticated, (req, res)=>{

        res.render('index.ejs', { name: req.user.username});   
   
    
});

app._router.get('/notloged', (req, res)=>{

    res.render('indexBase.ejs');   


});
app._router.get('/login',checkNotAuthenticated,  (req,res)=>{
    res.render('login.ejs');
});
app._router.post('/login',checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

app._router.get('/register', checkNotAuthenticated, (req,res)=>{
    res.render('register.ejs');
});

app.post('/register',checkNotAuthenticated, async (req,res)=>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword

        })
        res.redirect('/login');
    } catch {
        res.redirect('/register');
    }
    console.log(users);
});

app._router.delete('/logout', (req,res)=>{
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/notloged');
    });
})
function checkAuthenticated(req, res, next){
    if (req.isAuthenticated()){
        return next();
    } 

    res.redirect('/notloged')
    
}

function checkNotAuthenticated(req, res, next){
    if (req.isAuthenticated()){
      return  res.redirect('/');
    } 

   next();
    
}
app.listen(3000);