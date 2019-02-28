//Calculator v.2.2      LastUpdate: 27/02/2019
const Calculator = (function (maxDecimals) {
    let _result = 0;
    
    function operate (operation) {
        try {
            isStringValid(operation);
            _result = eval(operation);
        }
        catch(e) {
           throw console.log(e)
        }
        return fixedResult(_result)
    }

    function squareRoot (num) {
        return fixedResult(Math.sqrt(num))
    }
    
    function fixedResult (result) {
        return Number.isInteger(result) ? result : result.toFixed(maxDecimals)
    }

    return {
        operate,
        squareRoot
    }
})(2)