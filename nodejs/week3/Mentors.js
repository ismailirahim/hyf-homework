const fs = require('fs');

class Mentor {
	constructor(data) {
		this.dataFile = data;
	}
	getAllMentors() {
		const fileData = fs.readFileSync(this.dataFile).toString();
		const allMentors = JSON.parse(fileData);
		return allMentors;
	}
	checkMentor(mentorData, mentorName) {
		return mentorData.some((mentors) => mentors.name.toLowerCase() === mentorName.toLowerCase());
	}
	getMentorsByCourse(course) {
		let mentorsName = [];
		this.getAllMentors().forEach((mentor) => {
			if (mentor.course.indexOf(course) > -1) mentorsName.push(mentor.name);
		});
		return mentorsName;
	}
	getMentorByName(mentorName) {
		const mentors = this.getAllMentors();
		return mentors.find((mentor) => mentor.name.toLowerCase() === mentorName.toLowerCase());
	}
	addNewMentor(mentor) {
		let mentors = this.getAllMentors();
		if (this.checkMentor(mentors, mentor.name)) {
			return false;
		}
		mentors.push(mentor);
		const addMentor = JSON.stringify(mentors, null, 4);
		fs.writeFileSync(this.dataFile, addMentor);
		return true;
	}
}

module.exports = Mentor;
