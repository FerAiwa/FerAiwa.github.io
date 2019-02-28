  //Display Setup
  const config = { maxDecimals: 2 }
  const display = new Display('#display-output', '0');
  display.reset();
  setKeyDowns();
  setButtons();

  function setButtons () {
    //Standart [0-9] [+,-,*,/]
    const standartBtns = document.querySelectorAll(`button:not([id])`); 
    const specialBtns = [
      { selector: '#btn-reset', triggers: display.reset },
      { selector: '#btn-equal', triggers: printResult},
      { selector: '#btn-squareroot',triggers: printResult },
      { selector: '#btn-eraselast', triggers: display.deleteLastChar }
    ];
    
    standartBtns.forEach(btn => btn.addEventListener('click', printKey));
    specialBtns.forEach(setSpecialBtnListeners);
  }
  
  function setSpecialBtnListeners (btn) {
    const element = document.querySelector(btn.selector);
    element.addEventListener('click', btn.triggers)
    element.addEventListener('touch', btn.triggers)
  }

  function setKeyDowns () { document.body.addEventListener('keydown', onKeyDown);  }

  function onKeyDown (event) {
    switch (event.key) {
      case 'Enter': return printResult(event); 
      default     : return printKey(event);
    }
  }

  function printKey (event) {
    const key = event.key || event.target.innerHTML;
    try {
      isCharValid(key) 
      event.preventDefault();
      display.update(key);
    } catch(e) {
      console.log(e)
    }
  }
  
  function printResult (e) {
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