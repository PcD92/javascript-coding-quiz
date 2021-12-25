// ----- modal variables ----- //
const startupButton = document.querySelector('#startup');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

startupButton.addEventListener('click', () => {
    modal.classList.add('is-active')
});

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
});

// ----- Vari ----- //
const selectionOne = document.getElementById('selection1')
const selectionTwo = document.getElementById('selection2')
const selectionThree = document.getElementById('selection3')
const selectionFour = document.getElementById('selection4')
const correct = document.getElementById("correct")
const incorrect = document.getElementById("incorrect")
const timer = 75
const queryContainer = document.getElementById('query-container ')
const queryEl = document.getElementById('query')

startupButton.addEventListener('click', buildQuiz)



const myQuestions = [
    question1 = {
        textContent: "In the JavaScript, which one of the following is not considered as an error:",
        options: [
            "Syntax error",
            "Missing of semicolons",
            "Division by zero",
            "Missing of Bracket"
        ],
        answer: "Division by zero"
    },

    question2 = {
        textContent: "The condition in an if / else statement is enclosed within _____.",
        options: [
            "Quotes",
            "Curly brackets",
            "Parentheses",
            "Square brackets"
        ],
        answers: "Parentheses"
    },

    question3 = {
        textContent: "Which of the following type of a variable is volatile?",
        options: [
            "Mutable variable",
            "Volatile variable",
            "Dynamic variable",
            "Immutable variable"
        ],
        answer: "Mutable variable"
    },

    question4 = {
        textContent: "Which of the following variables takes precedence over the others if the names are the same?",
        options: [
            "Global variable",
            "The local element",
            "The two of the above",
            "None of the above"
        ],
        answer: "The local element"
    },

    question5 = {
        textContent: "When interpreter encounters an empty statements, what it will do:",
        options: [
            "Shows a warning",
            "Prompts to complete the statement",
            "Throws an error",
            "Ignores the statements"
        ],
        answer: "Ignores the statements"
    },

    question6 = {
        textContent: "Which of the following givenfunctions of the Number Object formats a number with a different number of digits to the right of the decimal?",
        options: [
            "toExponential()",
            "toFixed()",
            "toPrecision()",
            "toLocaleString()"
        ],
        answer: "toFixed()"
    },

    question7 = {
        textContent: "In JavaScript, what will be used for calling the function definition expression:",
        options: [
            "Function prototype",
            "Function literal",
            "Function calling",
            "Function declaration"

        ],
        answer: "Function literal"
    }
];

// ----- end of questions ----- //