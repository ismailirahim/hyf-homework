class Quiz {
    constructor(name) {
        this.name = name;
    }

    getQuestions() {
        // ***write missing code
        // return promise
        return new Promise(resolve => {
            resolve(
                fetch('https://gist.githubusercontent.com/ismailirahim/2218966fd99f33cfc1dc0b428c348278/raw/8a661ae4c2b2bdb7ff92108c2396ad08fd872e78/rahimismaili')
                    .then(res => res.json())

            )
        })
    }

    renderQuestions(questionsArray) {

        questionsArray.forEach(question => {
            let ul = document.querySelector('.questions > ul')
            function addQuiz() {
                var node = document.createElement("LI");
                let content = document.createElement('p')
                let label = document.createElement('label')
                let select = document.createElement('select')
                select.setAttribute('id', 'answer-select')
                content.innerHTML = `${question.title} : ${question.content}`
                label.setAttribute('for', 'answer-select')
                question.options.forEach(elem => {
                    let option = document.createElement('option')
                    option.innerHTML = elem.content.replace(/ *\([^)]*\) */g, "")
                    option.setAttribute('data-is-answer', elem.correct)
                    option.setAttribute('value', elem.content)
                    select.appendChild(option)
                })

                ul.appendChild(node)
                node.appendChild(content)
                node.appendChild(label)
                label.appendChild(select)

            }
            addQuiz();
        })
    }

    calculateScore() {
        // ***write missing code
        let options = document.querySelectorAll('[data-is-answer="true"]');

        let correctAnswers = 0;
        options.forEach(option => {
            console.log(option.selected)
            if (option.selected === true) {
                correctAnswers++
            }
        })

        return correctAnswers

    }
}

// ***write missing code
// instantiate quiz with name
let quiz = new Quiz('MyQuiz')

let button = document.querySelector('button')
button.innerHTML = 'Start Game'
let displaySeconds = document.querySelector('.display')




function displayScore() {
    let displayScore = document.querySelector('.result')
    if (quiz.calculateScore() === 0) {
        displayScore.innerHTML = ''

    }
    else if (quiz.calculateScore() < 4) {
        displayScore.innerHTML = 'Your Score  ' + quiz.calculateScore() + '/10 questions right, in ' + displaySeconds.innerHTML
    }
    else if (quiz.calculateScore() < 6) {
        displayScore.innerHTML = 'Your Score ' + quiz.calculateScore() + '/10 questions right, in ' + displaySeconds.innerHTML
    }
    else if (quiz.calculateScore() <= 7) {
        displayScore.innerHTML = 'Your Score  ' + quiz.calculateScore() + '/10 questions right, in  ' + displaySeconds.innerHTML
        let confettiSettings = { target: 'confetti' };
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
    }

}


let seconds = 1;
function incrementSeconds() {
    displaySeconds.innerText = seconds + " seconds.";
    seconds++
}

function startGame() {
    quiz.getQuestions().then(data => {
        button.innerHTML = 'Get Score'
        document.querySelector('.loading').remove();
        setInterval(incrementSeconds, 1000);
        quiz.renderQuestions(data)
        quiz.calculateScore()

    })
}

function stopTimer() {
    for (var i = 1; i < 99999; i++)
        window.clearInterval(i);
}

button.addEventListener('click', () => {
    startGame()
    displayScore()
    stopTimer()
})


