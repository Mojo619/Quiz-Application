const quizData = [

{
    question:'Whats the biggest animal in the world?',
    a:'Elephant',
    b:'Giraffe',
    c:'Blue Whale',
    d:'Lion',
    correct:'c'
},
{
    question:'Who painted the Mona Lisa?',
    a:'Leonardo DiCaprio',
    b:'Vincent Van Gogh',
    c:'Pablo Picasso',
    d:'Leonardo Da Vinci',
    correct:'d'
},
{
    question:'Which planet is closest to the sun?',
    a:'Earth',
    b:'Mercury',
    c:'Venus',
    d:'Mars',
    correct:'b'
},
{
    question:'Which fashion designer reportedly had a relationship with Winston Churchill?',
    a:'coco chanel',
    b:'Donatella Versace',
    c:'carolina Herrera',
    d:'Victoria Beckham',
    correct:'a'
},
{
    question:'How many valves does the heart have?',
    a:'2',
    b:'3',
    c:'6',
    d:'4',
    correct:'d'
},
{
    question:'What fruit takes the scientific name Mangifera indica?',
    a:'Musk Melon',
    b:'Water Melon',
    c:'Mango',
    d:'Grapes',
    correct:'c'
},
{
    question:'What is the largest country in the world?',
    a:'China',
    b:'Russia',
    c:'Antartica',
    d:'Canada',
    correct:'b' 
},
{
    question:'How many elements are there in the periodic table?',
    a:'98',
    b:'124',
    c:'118',
    d:'132',
    correct:'c'
    
},
{
    question:'What is the smallest country in the world?',
    a:'Vatican City',
    b:'Sri Lanka',
    c:'Maldives',
    d:'Malta',
    correct:'a'
},
{
    question:'From what grain is the Japanese spirit Sake made?',
    a:'Barley',
    b:'Rice',
    c:'Wheat',
    d:'Cornmeal',
    correct:'b'
},
{
    question:'What does HTML stand for ?',
    a:'Helicopters Terminal Motorbike Lamborghini',
    b:'Hyper Terminal Market Language',
    c:'Hydro technology Markup Language',
    d:'Hyper Text Markup Language',
    correct:'d'
}

];


const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly .</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
