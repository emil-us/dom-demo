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

// Event Object Properties
let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

// Write your code below
let sharePhoto = function(event) {
  event.target.style.display = 'none'
  text.innerHTML = event.timeStamp
}

share.onclick = sharePhoto;


// more event mouse wheel + keyboard
mysteryButton.addEventListener('wheel', colorChange);
itemOne.addEventListener('mouseover', increaseWidth);
itemTwo.addEventListener('mouseup', changeBackground);
itemThree.addEventListener('mouseout', changeText);
itemFour.addEventListener('mousedown', showItem);
document.addEventListener('keydown', up);
document.addEventListener('keyup', down);