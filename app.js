
const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],

  getGuess: function() { 
    
    let playerGuess
    do {
      playerGuess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}:`))
    }
    while(isNaN(playerGuess) || playerGuess < this.smallesttNum || playerGuess > this.biggestNum) 
      
    return parseInt(playerGuess)
    },
  
  render: function() { 
    //console.log('PREVGUESSES', this.prevGuesses)

    console.log(this.secretNum)
    
    if(this.prevGuesses[this.prevGuesses.length -  1] > this.secretNum){
    
      alert(`Your guess is too high! Previous guesses ${this.prevGuesses.join(' , ')}.`)
    } else if(this.prevGuesses[this.prevGuesses.length -  1] < this.secretNum) {
    
      alert(`Your guess is too low! Previous guesses: ${this.prevGuesses.join(' , ')}.`)
    } else if(this.prevGuesses[this.prevGuesses.length -  1] === this.secretNum) {
    
      alert(`Congrats! You guessed the number in ${this.prevGuesses.length} tries!`)
      }
  },

    play: function() {
   

    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    console.log(this.secretNum)

    do {

    this.prevGuesses.push(this.getGuess())
    this.render()
    } while(this.prevGuesses[this.prevGuesses.length -  1] !== this.secretNum); 
    }
    
}
  
  
game.play()







