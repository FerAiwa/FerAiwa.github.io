console.log('Welcome to HackABos Calculator! \n Author: Fer Ayguavives')
let exit = false;

validateInput = (str) => {
  if(/[A-Z]/i.test(str)) throw 'Invalid input. Use numbers only!';
  if(!str) throw 'You must write at least 1 number to proceed';
}

getNumbers = (userInput) => {
  const strNumbers = userInput.trim().split(" ");
  return strNumbers.map(x => parseFloat(x))
}

//Operations
//2+ numbers
sum        = (a,b) => { return a + b; }
substract  = (a,b) => { return a - b; }
multiply   = (a,b) => { return a * b }
divide     = (a,b) => { return a / b }
//1 number
squareRoot = (a)   => { return  Math.sqrt(a) }

performOperations = (operations, ...numbers) => {
  let results = [];
  if(numbers.length == 1) {
    results.push(squareRoot(numbers[0]));
  }
  else {
    for(let operation of operations) {
      const result = numbers.reduce((res,num, i) => {
        return i == 0 ? num : operation(res,num)
      });
      results.push(result);
    }
  }
  return results
}

displayResults = (numbers, results, fixedLimit = 2) => {
  let operationNames = [];
  if(results.length < 2) operationNames.push('Square Root');
  else operationNames = ['Adition', 'Substract', 'Multiplication', 'Division'];

  console.log(`· Numbers: ${numbers}`);
  console.log('· Operation results:');

  results = results.map(x => Number.isInteger(x) ? x : x.toFixed(fixedLimit));
  results.forEach((x,i) => console.log(` - ${operationNames[i]}: ${x}`));
}

checkUserWantsToExit = () => {
  const repeat = window.confirm("Do you want to make a new operation?");
  if(!repeat) {
    console.log("See you later, BOSer")
    return true
  }
  return false
}

while(!exit) {
  let userInput = prompt('Which numbers do you want to operate ?');
  let numbers = [];
  let results = [];
  const operations = [sum, substract, multiply, divide];

  try {
    validateInput(userInput);
    numbers = getNumbers(userInput);
    results = performOperations(operations, ...numbers);
    displayResults(numbers, results);
    exit = checkUserWantsToExit();
  }
  catch (e) {
    window.alert(e);
  }
}
