function validateInput (str) {
    console.log('validating input', str)
    const validation = str.trim().split("")
        .map(isValidChar)
        .reduce(x => x === true)
    if(!validation) throw 'Invalid input...!'
    return validation
}

function isValidChar (char) {
    const OPERATORS = ['+','-','*','/'];
    const validation = /[0-9,.]/.test(char) || OPERATORS.includes(char); 
    if(!validation) throw 'Invalid character. Try again.';
    console.log(char, validation)
    return validation
}