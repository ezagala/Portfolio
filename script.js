// Used to hide the scroll bar. 
const parent = document.getElementById('wrapperOne');
const child = document.getElementById('wrapperTwo');
child.style.paddingRight = child.offsetWidth - child.clientWidth + "px";