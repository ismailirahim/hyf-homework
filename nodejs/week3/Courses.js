const fs = require('fs');
const Mentors = require('./Mentors');
const hyf_mentors = new Mentors('./mentors.json');

class Course {
	constructor(data) {
		this.dataFile = data;
	}
	getAllCourse() {
		const fileData = fs.readFileSync(this.dataFile).toString();
		const allCourse = JSON.parse(fileData);
		// allCourse.forEach((course) => {
		// 	course['mentors'] = hyf_mentors.getMentorsByCourse(course.name);
		// });
		return allCourse;
	}

	getCourseByName(name) {
		const allCourses = this.getAllCourse();
		let getCourse = allCourses.find((elem) => elem.name === name);
		return getCourse;
	}
	checkCourse(courseData, name) {
		return courseData.some((course) => {
			return course.name === name;
		});
	}
	addNewCourse(course) {
		let courses = this.getAllCourse();
		if (this.getCourseByName(course.name)) {
			return false;
		} else {
			courses.push(course);
			const newCourse = JSON.stringify(courses, null, 4);
			fs.writeFileSync(this.dataFile, newCourse);
			return true;
		}
	}
	editExistedCourse(course) {
		if (this.getCourseByName(course.name)) {
			const allCourses = this.getAllCourse();
			const courseIndex = allCourses.findIndex((elem) => elem.name.toLowerCase() === course.name.toLowerCase());
			if (courseIndex >= 0) {
				allCourses[courseIndex] = course;
				const editCourse = JSON.stringify(allCourses, null, 4);
				fs.writeFileSync(this.dataFile, editCourse);
				return true;
			}
		} else {
			return false;
		}
	}
	deleteCourse(course) {
		const allCourses = this.getAllCourse();
		if (this.checkCourse(allCourses, course)) {
			let deleteCourse = allCourses.filter((elem) => course.toLowerCase() !== elem.name.toLowerCase());
			let deletedContent = JSON.stringify(deleteCourse, null, 2);
			fs.writeFileSync(this.dataFile, deletedContent);
			return true;
		} else {
			return false;
		}
	}
}

module.exports = Course;
