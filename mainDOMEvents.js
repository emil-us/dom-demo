let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

// Write your code here:
function showInfo() {
  moreInfo.style.display = 'block'
}

readMore.addEventListener('click', showInfo);


// Another way eventTarget.onclick = eventHandlerFunction;
function textChange() {
    view.innerHTML = 'Hello, World!'
  }
  
  function textReturn() {
    view.innerHTML = 'View'
  }
  
  view.onclick = textChange;
  close.onclick = textReturn;


// Removing Event Handlers
eventTarget.removeEventListener('click', eventHandlerFunction);

// more event mouse wheel / keyboard
mysteryButton.addEventListener('wheel', colorChange);
itemOne.addEventListener('mouseover', increaseWidth);
itemTwo.addEventListener('mouseup', changeBackground);
itemThree.addEventListener('mouseout', changeText);
itemFour.addEventListener('mousedown', showItem);
document.addEventListener('keydown', up);
document.addEventListener('keyup', down);