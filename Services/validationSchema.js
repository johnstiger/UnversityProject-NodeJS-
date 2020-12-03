const Joi = require('@hapi/joi');

const authSchema = Joi.object({
    email:Joi.string().email().lowercase().required(),
    password:Joi.string().min(4).required(),
    username:Joi.string()
});

const student = Joi.object({
    firstname: Joi.string().regex(/^[A-Z]+$/).required(),
    lastname: Joi.string().regex(/^[A-Z]+$/).required(),
    age: Joi.number().integer().greater(0).required(),
    gender: Joi.string().required(),
    address: Joi.string().required(),
    // contactnumber: Joi.string().regex(/^\d{3}-\d{4}-\d{3}$/).required(),
    email: Joi.string().email().required(),
    course: Joi.string().required(),
    yearlevel: Joi.string().required(),
    schoolyear: Joi.string().required()
});



module.exports = {
    authSchema,
    student
}