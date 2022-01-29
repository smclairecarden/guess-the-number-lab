





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
    
  },
  getGuess: function() { 
  playerGuess = parseInt(prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}:`))
  while( game.playerValue > this.smallestNum || game.playerValue < this.biggestNum) {
    console.log(game.playerValue)
  } 
  }
  }
  
  



console.log(game.play())



// if(playerValue === this.secretNum) {
//   console.log(`Congrats! You guessed the number in ${prevGuesses.length}`)
//   } else if(playerValue > this.secretNum) {
//   console.log(`Your guess is too high! Previous guesses ${prevGuesses}`)
//   } else {
//   console.log(`Your guess is too low! Previous guesses: ${prevGuesses}`)
//   }

