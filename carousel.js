let sliders = document.querySelectorAll(".slideImage")
let leftBtn = document.querySelector(".slideLeft")
let rightBtn = document.querySelector(".slideRight")


counter = 0
for(i = 0; i<sliders.length; i++){
    sliders[i].style.left = `${i*100}%`
}

function slideLeft(){
    if(counter == sliders.length-1) return
    counter++
    for(i = 0; i<sliders.length; i++){
        let val = Number.parseInt(sliders[i].style.left)
        val -= 100
        sliders[i].style.left = `${val}%`
    }
}

function slideRight(){
    if(counter == 0) return
    counter--
    for(i = 0; i<sliders.length; i++){
        let val = Number.parseInt(sliders[i].style.left)
        val += 100
        sliders[i].style.left = `${val}%`
    }
}
