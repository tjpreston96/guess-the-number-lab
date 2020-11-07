// add prevGuesses array
// set up 'prompt'
// create while loop
// alert -- tooHigh || tooLow


const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    }
  };

// // prev guesses propety -> game object -> initialized into empty array


function getGuess(){
    prompt (``)

}














  //   function getGuess(){
//     game.play();
//     let num= this.secretNum;
//     let input = 1;
//     console.log(`input: ${input},secret number: ${num}`);
//     return compGuess(input, num);
//   }
// function compGuess(input, num){
//     while(input != num){
//         if(input < num){
//             console.log(`${input} was too low`);
//         }
//         else if(input > num){
//             console.log(`${input} was too high`);
//         } 
//         console.log(num);
//         return input;
//     };
// };
// console.log(`${getGuess()} was not correct!`);