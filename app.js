//add prevGuesses
//set up 'prompt'
//create while loop
//alert tooHigh // tooLow
const game = {
  //Initilize state
title: 'Guess the Number!',
biggestNum: null,
smallestNum: null,
secretNum: null,
prevGuesses: [], // <-- step 1


play: function() {
  this.smallestNum = parseInt(prompt(`Enter the bottom number for your guessing range!`));
  this.biggestNum = parseInt(prompt(`Enter the top number for your guessing range!`));
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
  let result = (input === this.secretNum) ? 
  `Congrats! You guessed the number in ${this.prevGuesses.length} guesses`
  : 
  `
  Your guess: ${input} is too ${input > this.secretNum ? 'high' : 'low'}
  Previous guesses: ${this.prevGuesses.join(', ')}
  `
  alert(result)
},




  // !!!!! ANOTHER METHOD FOR RENDER !!!!!//
  // render: function(input){ 
  //     console.log('Guess', input)
  //     if(input === this.secretNum){
  //       alert(` Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`)
  //     } else if(input < this.secretNum){
  //         alert(`${input} was too low \r\n Previous guesses:${this.prevGuesses.join(', ')}`)
  //       } else{
  //         alert( `${input} was too high \r\n Previous guesses:${this.prevGuesses.join(', ')}`)
  //       }
  // render: function(input){ // <-- passed in guess argument 
  //     let result = (input === this.secretNum) ? alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses`)
  //     : input < this.smallestNum ? alert(`${guess} was too low /n Previous guesses:${this.prevGuesses.join(',')}`)
  //     : input > this.biggestNum ? alert(`${guess} was too high /n Previous guesses:${this.prevGuesses.join(',')}`)
  //     : 
  //     alert(result)
  // },
};
game.play()