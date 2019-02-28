
// Use Notes: 
// To add new validations, just create new functions and add the names to  
// validConditions array.
const validConditions = [isNotLetter, isOperator, isDot];

function isStringValid (str) {
    const validation = str.trim().split("").map(isCharValid);
    return validation
}

function isCharValid (char) {
    try {  
        validConditions.map(check => check(char))
    }
    catch (e) {
       throw 'Invalid character.' + e
    }
    return true
}

//Single-validators
function isNotLetter (char) {
    if(/[A-Z]/i.test(char)) throw 'Letter characters are not allowed'
}

function isOperator (char) { return ['+','-','*','/'].includes(char) }

function isDot (char) { return /[,.]/.test(char) }