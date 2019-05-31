const cors = require('cors');
const express = require('express');

const app = express();
app.use(express.json());
app.use(cors());

const Mentor = require('./Mentors.js');
const hyf_mentor = new Mentor('./mentors.json');

const Course = require('./Courses.js');
const hyf_course = new Course('./courses.json');

// http://localhost:3000/numbers/add?first=<number here>&second=<number here>
app.get('/numbers/add', (req, res) => {
    const firstNumber = parseInt(req.query.first);
    const secondNumber = parseInt(req.query.second);
    let result = firstNumber + secondNumber;
    res.send(`${firstNumber} + ${secondNumber} = ${result}`);
});

// http://localhost:3000/numbers/multiply/<first number here>/<second number here>
app.get('/numbers/multiply/:firstnumber/:secondnumber', (req, res) => {
    const firstNumber = parseInt(req.params.firstnumber);

    const secondNumber = parseInt(req.params.secondnumber);
    let result = firstNumber * secondNumber;

    res.send(`${firstNumber} * ${secondNumber} = ${result}`);
});

app.get('/mentors', (req, res) => {
    const mentorsList = hyf_mentor.getAllMentors();
    res.send(mentorsList);
});

// //http://localhost:3000/mentors/<Mentor Name>
app.get('/mentors/:name', (req, res) => {
    const name = req.params.name;
    const allMentors = hyf_mentor.getByName(name);
    if (allMentors == undefined) {
        res.send('No match Found');
    } else {
        res.send(allMentors);
    }
});

app.post('/mentors', (req, res) => {
    console.log(req.body);
    hyf_mentor.addNewMentor(req.body);
    res.send('Mentor added');
});

//http://localhost:3000/courses
app.get('/courses', (req, res) => {
    const allCourses = hyf_course.getAllCourses();
    res.send(allCourses);
});

// //http://localhost:3000/courses/Nodejs
app.get('/courses/:course', (req, res) => {
    const coursName = req.params.course;
    const allCourses = hyf_course.getByName(coursName);
    if (allCourses == undefined) {
        res.send('Not found');
    } else {
        res.send(allCourses);
    }
});

app.post('/courses', (req, res) => {
    hyf_course.addNewCourse(req.body);
    res.send('Course added');
});
app.listen(3000);
console.log('Server is running ');
