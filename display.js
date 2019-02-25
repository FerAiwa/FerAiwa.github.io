const Display = function (elementRef, startValue) {
    const element = document.querySelector(elementRef);

    function value () { return element.innerHTML }

    function update (newValue) {
			newValue = value() === startValue ? newValue : value().concat(newValue);
			element.innerHTML = newValue;
			return this
    }

    function reset () {
			element.innerHTML = startValue;
			return this;
    }

    return {
			value,
			update,
			reset
    }
}