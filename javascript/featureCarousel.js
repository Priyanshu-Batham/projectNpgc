let featureCard = document.querySelectorAll(".featureCard")
let leftBtn = document.querySelector(".featureLeftBtn")
let rightBtn = document.querySelector(".featureRightBtn")


base = 100/3
counter = 0
//setting the initial left value
for(i = 0; i<featureCard.length; i++){
    featureCard[i].style.left = `${base*i}%`
}


function slideLeft(){
    if(counter == featureCard.length-1) return
    counter++
    for(i = 0; i<featureCard.length; i++){
        let val = Number.parseInt(featureCard[i].style.left)
        val -= base
        featureCard[i].style.left = `${val}%`
    }
}

function slideRight(){
    if(counter == 0) return
    counter--
    for(i = 0; i<featureCard.length; i++){
        let val = Number.parseInt(featureCard[i].style.left)
        val += base
        featureCard[i].style.left = `${val}%`
    }
}


