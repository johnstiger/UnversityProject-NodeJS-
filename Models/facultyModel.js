const mongoose = require('mongoose')
const Schema = mongoose.Schema

const facultySchema = Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    course: { type: String, required: true },
    yearlevel: { type: String, required: true }
})

const teacher = mongoose.model("Faculty", facultySchema)

module.exports = teacher;