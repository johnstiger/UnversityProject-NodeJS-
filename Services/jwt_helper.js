const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const { use } = require('../Routes/AuthRoute');

module.exports = {
    signAccessToken: (userId) => {
        return new Promise((resolve, reject) => {
            const payload = {}
            const secret = process.env.ACCESS_TOKEN_SECRET
            const options = {
                expiresIn: "15s",
                issuer: "Southampton.com",
                audience: userId
            }
            jwt.sign(payload, secret, options, (err, token) => {
                if(err){
                    console.log(err.message);
                    reject(err)
                }
                resolve(token)
            });
        })
    },
    verifyAccessToken: (req, res, next) => {
        if(!req.headers['authorization'])return next(createError.Unauthorized());
        const authHeader = req.headers['authorization'];
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
            if(err){
               const message = err.name === 'JsonWebTokenError'?'Unauthorized':err.message;
               return next(createError.Unauthorized(message))
            }
            req.payload = payload;
            next();
        })
    },
    signRefreshToken: (userId) => {
        return new Promise((resolve, reject) => {
            const payload = {}
            const secret = process.env.REFRESH_TOKEN_SECRET
            const options = {
                expiresIn:"1y",
                issuer: "Southampton.com",
                audience: userId
            }
            jwt.sign(payload, secret, options, (err, token) => {
                if(err){
                    console.log(err.message);
                    reject(err)
                }
                resolve(token)
            });
        })
    }
}