let selectedWord = "";
let guessedLetters = [];
let lives = 6;

function startGame() {

    selectedWord =
        words[Math.floor(Math.random() * words.length)];

    guessedLetters = [];
    lives = 6;

    document.getElementById("lives").innerText = lives;
    document.getElementById("message").innerText = "";

    displayWord();
}

function displayWord() {

    let display = "";

    for (let letter of selectedWord) {

        if (
            letter === "A" ||
            letter === "E" ||
            letter === "I" ||
            letter === "O" ||
            letter === "U" ||
            guessedLetters.includes(letter)
        ) {
            display += letter + " ";
        } else {
            display += "_ ";
        }
    }

    document.getElementById("word").innerText = display;

    let hiddenLeft = false;

    for (let letter of selectedWord) {
        if (
            !"AEIOU".includes(letter) &&
            !guessedLetters.includes(letter)
        ) {
            hiddenLeft = true;
            break;
        }
    }

    if (!hiddenLeft) {
        document.getElementById("message").innerText = "You Win!";
    }
}

function checkLetter() {

    let input = document.getElementById("guess");

    let letter = input.value.toUpperCase();

    input.value = "";

    if (letter === "") {
        return;
    }

    if (selectedWord.includes(letter)) {

        if (!guessedLetters.includes(letter)) {
            guessedLetters.push(letter);
        }

    } else {

        lives--;
        document.getElementById("lives").innerText = lives;
    }

    displayWord();

    if (lives <= 0) {
        document.getElementById("message").innerText =
            "Game Over! Word was " + selectedWord;
    }
}

startGame();