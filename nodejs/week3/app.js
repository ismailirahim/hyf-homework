const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());
const port = 5001;

const Course = require('./Courses.js');
const hyf_courses = new Course('./courses.json');

const Mentor = require('./Mentors.js');
const hyf_mentors = new Mentor('./mentors.json');

const courseR = express.Router();
const mentorR = express.Router();

courseR
	.route('/course')
	.get((req, res) => {
		let allCourses = hyf_courses.getAllCourse();
		res.status(200).send(allCourses);
	})
	.post((req, res) => {
		if (hyf_courses.addNewCourse(req.body)) {
			res.status(200).send(`Course added: ${req.body.name}`);
		} else {
			res.status(400).send(`Course already exist: : ${req.body.name}`);
		}
	})
	.put((req, res) => {
		if (hyf_courses.editExistedCourse(req.body)) {
			res.status(200).send(`Course edited: ${req.body.name}`);
		} else {
			res.status(400).send(`Course does not exist: ${req.body.name}`);
		}
	})
	.delete((req, res) => {
		console.log(req.query.name);
		const name = req.query.name;
		let deletedCourse = hyf_courses.deleteCourse(name);
		if (deletedCourse) {
			res.status(200).send(`Course has been deleted: ${name}`);
		} else {
			res.status(400).send(`No course whith ${name} is specified.`);
		}
	});
mentorR
	.route('/mentor')
	.get((req, res) => {
		let allMentors = hyf_mentors.getMentorByName('Benjamin');
		res.status(200).send(allMentors);
	})
	.post((req, res) => {});
app.use('/api', courseR);
app.use('/api', mentorR);
app.listen(port, () => {
	console.log(`HYF course app listening on port ${port}`);
});
