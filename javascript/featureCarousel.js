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
            featureCard[i].style.left = `${base * i}%`
        }
    }
    if (count == n - 1 && isMobile) {
        count = 0
        for (i = 0; i < n; i++) {
            featureCard[i].style.left = `${base * i}%`
        }
    }
    else {
        count++
        for (i = 0; i < n; i++) {
            let val = Number.parseInt(featureCard[i].style.left)
            val -= base
            featureCard[i].style.left = `${val}%`
        }
    }
}

function slideRight() {
    if (count == 0 && isMobile==false) {
        count = (n - 1) - 4
        let tempBase = 75
        for (i = n-1; i >= 0; i--) {
            featureCard[i].style.left = `${tempBase}%`
            tempBase -= 25
        }
    }
    else if (count == 0 && isMobile){
        count = n-1
        let tempBase = 0
        for (i = n-1; i >= 0; i--) {
            featureCard[i].style.left = `${tempBase}%`
            tempBase -= 100
        }
    }
    else {
        count--
        for (i = 0; i < n; i++) {
            let val = Number.parseInt(featureCard[i].style.left)
            val += base
            featureCard[i].style.left = `${val}%`
        }
    }
}

//automating
setInterval(slideLeft, 3000)


