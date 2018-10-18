var readline = require('readline'),
  rl = readline.createInterface(process.stdin, process.stdout);

const welcome = function () {
  console.log(
    "Welcome to rock, paper, scissors. Please type 'r', 'p', or 's' to make a choice."
  );
};

welcome();
// rl.prompt();
const getPCchoice = function (rdmNum) {
  setTimeout(() => {
    console.log(`The computer chose ${pcChoice}.`);
    compareChoices(userChoice, pcChoice);
    process.exit(0);
  }, 1000);
};

let rdmNum = Math.random();
const options = function (rdmNum) {
  // console.log(rdmNum);
  if (rdmNum < 0.33) {
    rdmNum = 'Paper';
  } else if (rdmNum < 0.66) {
    rdmNum = 'Scissors';
  } else {
    rdmNum = 'Rock';
  }

  return rdmNum;
};

let pcChoice = options(rdmNum);
let userChoice = '';
const compareChoices = function (a, b) {
  // console.log(a, b);
  if (a === b) {
    console.log('You tied!');
  } else if (
    (a === 'Paper' && b === 'Rock') ||
    (a === 'Rock' && b === 'Scissors') ||
    (a === 'Scissors' && b === 'Paper')
  ) {
    // a won
    console.log('Congratulations! You win!');
  } else {
    // b won
    console.log('Good try, but you lose :(');
  }
};

rl.on('line', function (line) {
  let str = line.trim().toLowerCase();
  switch (str) {
    case 'p':
      console.log(`You chose Paper. Hmm...`);
      userChoice = 'Paper';
      getPCchoice();
      break;
    case 'r':
      console.log(`You chose Rock. Hmm...`);
      userChoice = 'Rock';
      getPCchoice();
      break;
    case 's':
      console.log(`You chose Scissors. Hmm...`);
      userChoice = 'Scissors';
      getPCchoice();
      break;
    default:
      console.log(`You chose ${str}. Hmm...`);
      break;
  }
  // rl.prompt();
}).on('close', function () {
  console.log('Have a great day!');
  process.exit(0);
});
