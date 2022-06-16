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


function playRound(playerMove) {
    
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

    const results = document.querySelector('.results');
    results.textContent = (outcome + ` ${winMove} beats ${loseMove}`);
    document.appendChild(results)


}


const rbtn = document.querySelector('#rock')
rbtn.addEventListener('click', function(e){
    playRound('Rock')

});

const pbtn = document.querySelector('#paper')
pbtn.addEventListener('click', function(e){
    playRound('Paper')
});

const sbtn = document.querySelector('#scissors')
sbtn.addEventListener('click', function(e){
    playRound('Scissors')
});

