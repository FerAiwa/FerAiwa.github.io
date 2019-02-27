const Display = function (elementRef, startValue) {
    const element = document.querySelector(elementRef);

    function value () { return element.value }

    function isStartValue (value) { return value === startValue }
    function hasErrorMsg (value) { return ['Error', 'NaN', 'Infinity'].includes(value) }

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

    return {
        value,
        update,
        reset
    }
}
