

let prevGuesses = []


const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      return this.secretNum
  }
}

console.log(game.play())

let  small = this.smallestNum
let big = this.biggestNum
let playerValue = 45




function getGuess(small, big) {
  return `Enter a guess between ${small} and ${big}: ${playerValue}: `
}


console.log(getGuess(1, 100))

do {
  game.play
} while(playerValue >= this.smallestNum || playerValue <= this.biggestNum)


