// alert('Hello Emil!');

// document.querySelector('h1').innerHTML = 'Hellooooooooooo!'

// document.querySelector('#blue').style.fontFamily = 'Roboto';
// document.querySelector('body').style.backgroundColor = '#201F2E'

let paragraph = document.createElement('p');
paragraph.id = 'info'; 
paragraph.innerHTML = 'New text added as a paragraph'; 
// document.body.appendChild(paragraph);

// remove child
// let oaxaca = document.getElementById('oaxaca')
// let parent = document.getElementById('more-destinations')
// parent.removeChild(oaxaca)


let button = document.querySelector("button");

function changeButtonText() {
  button.innerHTML = "Special Button"
}

button.addEventListener('mouseover', changeButtonText);

function turnButtonRed (){
  button.style.backgroundColor='red'
  button.style.color='white'
  button.innerHTML='Red Button'
  document.body.appendChild(paragraph);
  document.querySelector('h1').innerHTML = 'Click Me!'
};

button.onclick = turnButtonRed;


// let a = document.querySelector('body').firstChild
let bod = document.body
console.log(bod)
let first = document.body.firstChild
console.log(first)

// a.innerHTML = 'aaa';
// console.log(a.innerHTML = 'a');
// child.innerHTML= 'bbb';
// console.log(b.innerHTML)
// first.innerHTML = 'I am the child!'
// console.log(first.parentNode)

