// declare const and var
let currentGuess = "";
const guessLength = 5;
let roundsNumber = 6;
let currentRow = 0;
let gameOver = false;

let letters = document.querySelectorAll(".letter");

let correctAnswer = "";
let correctLetters = [];

// update correctAnswer and correctletters
window.onload = async function findWOTD() {
    let promise = await fetch("https://words.dev-apis.com/word-of-the-day");
    let response = await promise.json();
    correctAnswer = response.word;
    correctAnswer = correctAnswer.toUpperCase();
    correctLetters = correctAnswer.split("");
    document.querySelector(".lossscreenword").innerText = correctAnswer;
};

// verify letters
function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
};

// verify that words are valid
async function isValidWord(wordToEvaluate) {
    let promise = await fetch("https://words.dev-apis.com/validate-word", {
        method: "POST",
        body: JSON.stringify({ "word": wordToEvaluate })
    });
    let response = await promise.json();
    let isValid = response.validWord;
    return isValid;
};

// do something when keys are pressed
document.addEventListener("keydown", async function (keyPressed) {
    if (!gameOver) {
        keyPressed = keyPressed.key.toUpperCase()
        if (isLetter(keyPressed)) {
            if (currentGuess.length < guessLength) {
                currentGuess = currentGuess + keyPressed;

                letters[currentRow * guessLength + currentGuess.length - 1].innerText = keyPressed;
            }
            else {
                currentGuess = currentGuess.substring(0, currentGuess.length - 1) + keyPressed;

                letters[currentRow * guessLength + currentGuess.length - 1].innerText = keyPressed;
            }
        }
        else if (keyPressed == "BACKSPACE") {
            currentGuess = currentGuess.substring(0, currentGuess.length - 1);

            letters[currentRow * guessLength + currentGuess.length].innerText = "";
        }
        else if (keyPressed == "ENTER") {
            if (await isValidWord(currentGuess)) {
                let currentLetters = currentGuess.split("")

                function createMap(array) {
                    let obj = {}
                    for (let i = 0; i < guessLength; i++) {
                        if (obj[i] == array[i]) {
                            obj[i]++
                        }
                        else {
                            obj[array[i]] = 1
                        }
                    }
                    return obj
                }
                let map = createMap(correctLetters)

                for (let i = 0; i < guessLength; i++) {
                    if (currentLetters[i] == correctLetters[i]) {
                        letters[currentRow * guessLength + i].classList.add("correct");
                        map[currentLetters[i]]--;
                    }
                }
                for (let i = 0; i < guessLength; i++) {
                    if (currentLetters[i] == correctLetters[i]) {
                        // do nothing, we already did it
                    }
                    else if (correctLetters.includes(currentLetters[i]) && map[currentLetters[i]] > 0) {
                        letters[currentRow * guessLength + i].classList.add("close");
                        map[currentLetters[i]]--;
                    }
                    else {
                        letters[currentRow * guessLength + i].classList.add("wrong");
                    }
                };

                if (letters[currentRow * guessLength + 0].classList.contains("correct") && letters[currentRow * guessLength + 1].classList.contains("correct") && letters[currentRow * guessLength + 2].classList.contains("correct") && letters[currentRow * guessLength + 3].classList.contains("correct") && letters[currentRow * guessLength + 4].classList.contains("correct")) {
                    document.querySelector(".winscreen").classList.toggle("hidden");
                    gameOver = true
                }
                else {
                    currentRow++;
                    currentGuess = "";
                    if (roundsNumber == currentRow) {
                        document.querySelector(".lossscreen").classList.toggle("hidden");
                        gameOver = true
                    }
                };
            }
            else {
                if (currentGuess.length == guessLength) {
                    letters[currentRow * guessLength + 0].innerText = ""
                    letters[currentRow * guessLength + 1].innerText = ""
                    letters[currentRow * guessLength + 2].innerText = ""
                    letters[currentRow * guessLength + 3].innerText = ""
                    letters[currentRow * guessLength + 4].innerText = ""

                    const invalidFlash = [
                        { border: "2px solid rgb(139, 0, 0)" }
                    ]
                    const invalidTiming = {
                        direction: "alternate",
                        duration: 250,
                        iterations: 4,
                        fill: "forwards"
                    }
                    letters[currentRow * guessLength + 0].animate(invalidFlash, invalidTiming);
                    letters[currentRow * guessLength + 1].animate(invalidFlash, invalidTiming);
                    letters[currentRow * guessLength + 2].animate(invalidFlash, invalidTiming);
                    letters[currentRow * guessLength + 3].animate(invalidFlash, invalidTiming);
                    letters[currentRow * guessLength + 4].animate(invalidFlash, invalidTiming);

                    currentGuess = "";
                }
                else {
                    // do nothing
                }
            }
        }
        else {
            // do nothing
        }
    }
    else {
        // do nothing
    };
});