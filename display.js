const Display = function (elementRef, startValue) {
    const element = document.querySelector(elementRef);

    function value () { return element.value }

    //TODO: Overwrite Error message in display!
    function update (newValue) {
        newValue = value() === startValue ? newValue : value().concat(newValue);
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