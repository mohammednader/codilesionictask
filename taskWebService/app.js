var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyparser=require("body-parser");
var connectflash=require("connect-flash");

var AccountsRouter = require('./routes/accountsRouter');
var cors = require('cors');

//connect to mongo db
mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/accounts");

var app = express();

// view engine setup

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"Views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended :true
}));//for all request
app.use(connectflash());
app.use(cors());

// Router 
app.use('/accounts', AccountsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



app.listen(8080,()=>{console.log("server is running .......")})


