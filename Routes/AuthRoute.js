const express = require('express');
const router = express.Router();    

const allroutes = require('../Controllers/directController');
router.get('/', allroutes.homepage)
router.get('/Admin',allroutes.Admin)
router.get('/student', allroutes.getAllStudent)
router.post('/addstudent', allroutes.addStudent)
router.get('/getstudent/:id', allroutes.getStudent)
router.post('/updateStudent/:id', allroutes.editStudent)
router.post('/deleteStudent/:id', allroutes.delStudent)
router.get('/teacher', allroutes.getAllTeacher)
router.post('/addTeacher', allroutes.addTeacher)
router.post('/updateTeacher/:id', allroutes.editTeacher)
router.post('/deleteTeacher/:id', allroutes.delTeacher)
router.post('/register', allroutes.register)
router.post('/login', allroutes.login)

module.exports = router;