const input = document.querySelector('.input')
const list = document.querySelector('.grocery-list')
const container = document.querySelector('.container')
const dust = document.querySelector('.image')

input.addEventListener('keydown',(e)=>{
    if(e.key == 'Enter'){
        let value = document.createElement('p')
        value.textContent = '- '+input.value
        value.setAttribute('class','added-list')
        list.append(value)
        
        input.value =''
        value.addEventListener("click", () => {
            if(value.style.textDecoration != "line-through")
                value.style.textDecoration = "line-through";
            else
            value.style.textDecoration = "none";
    })
}
})
dust.addEventListener('click',()=>{
    list.textContent = ''
})


// function addItem(){
//     input.addEventListener('click',(e)=>{
//     })
// }