const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
require('dotenv').config();
require('./Services/initMongoDb');  
const AuthRoute = require('./Routes/AuthRoute');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine","ejs");
app.use(express.static('public'));

app.use(morgan('dev'));
const PORT = process.env.PORT || 3000;

app.use('/University', AuthRoute);

app.use(async (req, res, next) => {
    next(createError.NotFound())
});
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error:{
            status: err.status || 500,
            message: err.message,
        },
    });
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})