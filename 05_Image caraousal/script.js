const images = document.querySelectorAll('.image')
const dots = document.querySelectorAll('.dot')
let index=0

show_image(index)

function show_image(i){
    index += i

    for (let x of images){
        x.style.display = 'none'
    }

    // for(let x of dots){
    //     x.classList.remove('active')
    // }

    // for (i = 0; i < dots.length; i++) 
    //     dots[i].className = dots[i].className.replace(" active", "");

    
    if(index>(images.length-1)) {
        index=0
    }
    if(index<0) {
        index= images.length-1
    }
    images[index].style.display='block'
    // dots[index].classList.add('active')
    // dots[index].className += " active";

}


