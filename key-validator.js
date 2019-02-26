function validateInput (str) {
    const validation = str.split("")
        .map(isValidChar)
        .reduce(x => x === true)
    if(!validation) throw 'Invalid input...!'
    return validation
}

function isValidChar (char) {
    const OPERATORS = ['+','-','*','/'];
    const validation = /[0-9,.]/.test(char) || OPERATORS.includes(char); 
    if(!validation) throw 'Invalid character. Try again.';
    return validation
}