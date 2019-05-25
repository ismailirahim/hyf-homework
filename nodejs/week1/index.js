let courses = require('./courses.json');
let mentors = require('./mentors.json');
class Courses {
    constructor(course) {
        this.courses = course;
    }
    // Step 1: Write a method that can return list of all HYF courses
    getList() {
        const data = this.courses.map(courses => courses);
        console.log(data);
    }
    // Step 2: Write a method that can return one course info
    getCourse(course) {
        let reslut = this.courses.filter(
            elem => elem.title.toLowerCase() === course.toLowerCase()
        );
        if (reslut.length === 0) {
            console.log('No match FOUND');
        } else {
            console.log(reslut);
        }
    }
    // Step 3: Write a method that can add a new course to HYF library
    addCourse(course) {
        let courseExist = this.courses.filter(
            elem => elem.title === course.title
        );
        if (courseExist.length === 0) {
            this.courses.push(course);
        } else {
            console.log('Course alredy Exist');
        }
    }
}

class Mentor {
    constructor(mentor) {
        this.mentor = mentor;
    }
    getMentorNames() {
        let mentors = this.mentor.map(mentor => mentor.name);
        console.log(mentors);
    }
    getCourseMentors(course) {
        let mentors = [];
        this.mentor.forEach(element => {
            element.course.forEach(elem => {
                if (elem.toLowerCase() === course.toLowerCase()) {
                    mentors.push(element.name);
                }
            });
        });
        if (mentors.length === 0) {
            console.log('Course doesnt exist');
        } else {
            console.log(mentors);
        }
    }
    // Step 4: Write a method that can edit existing mentor information
    editMentor(mentor) {
        let editedMentor = this.mentor
            .filter(elem => elem.name === mentor.name)
            .map(elem => {
                return {
                    name: mentor.name,
                    course: mentor.courses
                };
            });
        console.log(editedMentor);
    }
    // Step 5: Write a method that can delete existing mentor
    deleteMentor(mentorName) {
        let result = this.mentor.filter(elem => elem.name !== mentorName);
        console.log(result);
    }
}
const hyf_courses = new Courses(courses);
const hyf_mentor = new Mentor(mentors);

const newCourse = {
    title: 'Database',
    duration: '3',
    mentors: []
};

const mentor = {
    name: 'Benjamin',
    courses: ['HTML/CSS', 'J', 'Database']
};
//add a course
// hyf_courses.addCourse(newCourse);

//add an existing course
// hyf_courses.addCourse(newCourse1);

// get course  by title
// hyf_courses.getCourse('js');

// hyf_mentor.getMentorNames();
// hyf_courses.getList();

// hyf_mentor.editMentor(mentor);
// hyf_mentor.getCourseMentors('nodeJs');
// hyf_mentor.deleteMentor('Niels');
