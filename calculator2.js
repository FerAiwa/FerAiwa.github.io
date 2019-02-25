//Calculator v.2.0
//Date: 24/02/2019
const OPERATORS = ['+','-','*','/','√'];

function validateInput (str) {
    const validation = str.split("")
        .map(isValidChar)
        .reduce(x => x === true)
    if(!validation) throw 'Invalid input...!'
    return validation
}

function isValidChar (char) {
    const validation = /[0-9,.]/.test(char) || OPERATORS.includes(char); 
    if(!validation) throw 'Invalid character. Try again.';
    return validation
}

function operate (operation) {
    let result;
    try {
        validateInput(operation);
        result = eval(operation);
    }
    catch(e) {
       throw console.log(e)
    }
    return result
}

function getFixedNumber (result, maxDecimals) {
    return Number.isInteger(result) ? result : result.toFixed(maxDecimals)
}
