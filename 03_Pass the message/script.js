let input = document.querySelector('#enter')
let value = document.querySelector('.value')
const button = document.querySelector('.submit')


button.addEventListener('click',()=>{
    value.innerText = input.value
})
