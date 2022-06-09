function toTitleCase(word) {
    let firstChar = word.charAt(0).toUpperCase()
    let nextChars = word.substring(1).toLowerCase()
    return firstChar + nextChars
}

function computerPlay() {
    let computerMove = Math.floor(Math.random() * 3)

    if (computerMove === 0) {
        computerMove = 'Rock'
    } else if (computerMove === 1) {
        computerMove = 'Paper'
    } else {
        computerMove = 'Scissors'
    }

    return computerMove
}


function playRound() {

    let playerMove = prompt("Please enter your move: ").toLowerCase()
    let computerMove = computerPlay()
    let outcome = ""
    if (playerMove === computerMove) {

    }
}
