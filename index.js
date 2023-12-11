const questions = [
    {
        question: "which is larget animal in the world?",
        answers: [
            {text: 'shark', correct: false},
            {text: 'blue whale', correct: true},
            {text: 'elephant', correct: false},
            {text: 'giraffe', correct: false},
        ]
    },
    {
        question: "which is smallest continent in the world?",
        answers: [
            {text: 'Asia', correct: false},
            {text: 'Australia', correct: true},
            {text: 'Arctic', correct: false},
            {text: 'Africa', correct: false},
        ]
    },
    {
        question: "which is larget desert in the world?",
        answers: [
            {text: 'kalahari', correct: false},
            {text: 'gobi', correct: false},
            {text: 'sahara', correct: false},
            {text: 'antarctica', correct: true},
        ]
    }
];

const question = document.querySelector('.question');
const answer = document.querySelector('.answer-btn');
const next = document.querySelector('.next');

let currentQuestionIndex = 0;
let score = 0;

function start(){
    answer.style.display = "flex"
    currentQuestionIndex = 0;
    score = 0;
    next.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex+1;
    question.innerHTML = questionNumber + '.' + currentQuestion.question;
    answer.innerHTML = ''

    currentQuestion.answers.forEach(a => {
        const button = document.createElement('button');
        button.innerHTML = a.text;
        button.classList.add('option');
        answer.appendChild(button);
        if(a.correct){
            button.dataset.correct = a.correct;
        }
        button.addEventListener('click',selectAnswer)
    })
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === 'true';
    if(isCorrect){
        selectBtn.classList.add('correct');
        score++;
    } else {
        selectBtn.classList.add('incorrect');
    }
    // Array.from(answer.children).forEach(button=>{
    //     if(button.dataset.correct ==='true'){
    //         button.classList.add('correct');
    //     }
    //     button.disabled=true;
    // });
    next.style.display='block'
}

function showScore(){
    answer.style.display = "none"
    question.innerHTML = `Your score ${score} out of ${questions.length}`
    next.innerHTML = 'play again';
    next.style.display = 'block';
}

function nextQuestion(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

next.addEventListener('click',()=>{
    if(currentQuestionIndex < questions.length){
        nextQuestion();
    } else {
        start();
    }
});

start();
