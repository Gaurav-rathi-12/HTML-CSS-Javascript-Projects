const button = document.querySelector('.button')
const body = document.querySelector('.container')
const hexCode = document.querySelector('.hexCode')

let a
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
console.log(getRandomColor());

button.addEventListener('click', ()=>{
    body.style.backgroundColor = getRandomColor()
    hexCode.innerText = getRandomColor()
})
