function setBtnListeners () {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => btn.addEventListener('click', reactKey))
}

function setKeyListeners () {
    document.addEventListener('keydown', reactKey)
}
