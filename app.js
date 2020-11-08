// add prevGuesses array
// set up 'prompt'
// create while loop
// alert -- tooHigh || tooLow


const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [], // <-- step 1
  play: function() {
      this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
      let input = NaN
      while(this.secretNum !== input){
          input = this.getGuess();  //INPUT
          this.prevGuesses.push(input);  //PUSH PREVIOUS GUESS TO ARRAY
          this.render(input);
          if (input === this.secretNum) return;
      }
  },
  getGuess: function(){ // check back about === NaN
      let input = NaN
      while( isNaN(input) || input > this.biggestNum || input < this.smallestNum){
          input = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
      };
      return input
  },
  render: function(input){ // <-- passed in guess argument 
      let result = (input === this.secretNum)
       ? 
      `Congrats! You guessed the number in ${this.prevGuesses.length} guesses`
      : 
      `Your guess is too ${input > this.secretNum ? 'high' : 'low'}
      Previous guesses: ${this.prevGuesses.join(',')}`
      alert(result)
  },
};
game.play()