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

    let playerMove = prompt("Please enter your move: ")
    playerMove = toTitleCase(playerMove)
    let computerMove = computerPlay()
    let outcome = ""

    if (playerMove === computerMove) {
        return "It's a Tie!"
    } else if (playerMove === 'Rock' && computerMove === 'Paper') {
        outcome = "You Lose!"
    } else if (playerMove === 'Rock' && computerMove === 'Scissors') {
        outcome = "You Win!"
    } else if (playerMove === 'Paper' && computerMove === 'Rock') {
        outcome = "You Win!"
    } else if (playerMove === 'Paper' && computerMove === 'Scissors') {
        outcome = "You Lose!"
    } else if (playerMove === 'Scissors' && computerMove === 'Rock') {
        outcome = "You Lose!"
    } else if (playerMove === 'Scissors' && computerMove === 'Paper') {
        outcome = "You Win!"
    } 

    let winMove = ""
    let loseMove = ""

    if (outcome == "You Win!") {
        winMove = playerMove
        loseMove = computerMove
    } else if (outcome == "You Lose!") {
        winMove = computerMove
        loseMove = playerMove
    }

    return outcome + ` ${winMove} beats ${loseMove}`
}

function game() {
    let computerWins = 0
    let playerWins = 0
    let result = ""

    for (let i = 0; i < 1; i++) {

        result = playRound()

        if (result.substring(0,9) == "You Lose!") {

            computerWins++
        } else if (result.substring(0,8) == "You Win!") {
            playerWins++
        }
        console.log(result)

    }
    if (playerWins > computerWins) {
        console.log(`Player wins ${playerWins} to ${computerWins}!`)
    } else if (playerWins < computerWins) {
        console.log(`Computer wins ${computerWins} to ${playerWins}!`)
    } else {
        console.log(`Player and Computer tied ${playerWins} to ${computerWins} `)
    }


}

game()