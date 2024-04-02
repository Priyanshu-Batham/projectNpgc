let featureCard = document.querySelectorAll(".featureCard")
let leftBtn = document.querySelector(".featureLeftBtn")
let rightBtn = document.querySelector(".featureRightBtn")

const viewportWidth = window.innerWidth;
let isMobile = false
if(viewportWidth <= 440) isMobile = true


let base = 25
if(isMobile) base = 100 //for mobile

let count = 0
let n = featureCard.length

//setting the initial left value
for (i = 0; i < n; i++) {
    featureCard[i].style.left = `${base * i}%`
}


function slideLeft() {
    if (count == n - 4 && isMobile==false) {
        count = 0
        for (i = 0; i < n; i++) {
            featureCard[i].style.transform = `translateX(0%)`
        }
    }
    if (count == n - 1 && isMobile) {
        count = 0
        for (i = 0; i < n; i++) {
            featureCard[i].style.transform = `translateX(0%)`
        }
    }
    else {
        count++
        for (i = 0; i < n; i++) {
            featureCard[i].style.transform = `translateX(${-100*count}%)`
        }
    }
}

function slideRight() {
    if (count == 0 && isMobile==false) {
        count = (n - 1) - 4
        for (i = 0; i < n; i++) {
            featureCard[i].style.transform = `translateX(${-100*count}%)`
        }
    }
    else if (count == 0 && isMobile){
        count = n-1
        let tempBase = 0
        count = 0
        for (i = 0; i < n; i++) {
            featureCard[i].style.transform = `translateX(0%)`
        }
    }
    else {
        count--
        for (i = 0; i < n; i++) {
            featureCard[i].style.transform = `translateX(${-100*count}%)`
        }
    }
}

//automating
setInterval(slideLeft, 3000)

