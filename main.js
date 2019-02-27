  //Display Setup
  const config = { maxDecimals: 2 }
  const display = new Display('#display-output', '0');
  display.reset();
  setButtons();

  function setButtons () {
    const standartBtns = document.querySelectorAll(`button:not([id])`); //Standart [0-9] [+,-,*,/]
    const specialBtns = [
      { selector: '#btn-reset', 		triggers: display.reset },
      { selector: '#btn-equal', 		triggers: showResults },
      { selector: '#btn-squareroot',triggers: showResults }
    ];

    standartBtns.forEach(btn => btn.addEventListener('click', printKey));
    specialBtns.forEach(setSpecialBtnListeners);
  }

  function setSpecialBtnListeners (btn) {
    const element = document.querySelector(btn.selector);
    element.addEventListener('click', btn.triggers)
    element.addEventListener('touch', btn.triggers)
  }

  function printKey (event) {
    event.preventDefault();
    const key = event.target.innerHTML;
    try {
      isValidChar(key) 
      display.update(key);
    } catch(e) {
      console.log(e)
    }
  }
  
  function showResults (e) {
    e.preventDefault();
    const key = e.target.value;
    let result;
    try 	  { 
      result = Calculator.operate(display.value());
      if(key === '√') result = Calculator.squareRoot(result);
    }
    catch (e) { 
      result = 'Error' 
    }
    display.reset().update(result)
  }
