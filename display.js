const Display = function (elementRef, startValue) {
    const element = document.querySelector(elementRef);

    function value () { return element.value }

    function isStartValue (value) { return value === startValue }
    function hasErrorMsg (value) { return ['Error', 'NaN', 'Infinity'].includes(value) }

    //TODO: Overwrite Error message in display!
    function update (newValue) {
        let value = element.value;
        newValue = isStartValue(value) || hasErrorMsg(value) ? newValue : value.concat(newValue);
        element.value = newValue;
        return this
    }

    function reset () {
        element.value = startValue;
        return this;
    }

    function deleteLastChar () {
        const value = element.value;
        element.value = value.substring(0, value.length-1);
        return this
    }

    return {
        value,
        update,
        reset,
        deleteLastChar
    }
}