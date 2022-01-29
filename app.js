





const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  playerValue: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
    (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    return this.secretNum
    let guesses
    do {
    guesses = this.getGuess()
    this.prevGuesses.push(guesses)
    console.log(this.prevGuesses)
    } while(guesses ==! this.secretNum) 
     console.log(guesses)
    },

  getGuess: function() { 
  playerGuess = parseInt(prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}:`))
  while(game.playerValue > this.smallestNum || game.playerValue < this.biggestNum) {
    return playerGuess
  } 
  },
//render: alertMessage() { 
  // if(game.playerValue === this.secretNum) {
  // console.log(`Congrats! You guessed the number in ${game.prevGuesses.length}`)
  // } else if(playerValue > this.secretNum) {
  // console.log(`Your guess is too high! Previous guesses ${game.prevGuesses}`)
  // } else {
  // console.log(`Your guess is too low! Previous guesses: ${game.prevGuesses}`)
  // }
//}

}
  
  



console.log(game.play())
console.log(game.getGuess())







