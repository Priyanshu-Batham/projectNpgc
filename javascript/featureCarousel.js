let featureCard = document.querySelectorAll(".featureCard")
let leftBtn = document.querySelector(".featureLeftBtn")
let rightBtn = document.querySelector(".featureRightBtn")


let base = 25
let count = 0
let n = featureCard.length
console.log(n)
console.log(typeof n)

//setting the initial left value
for (i = 0; i < n; i++) {
    featureCard[i].style.left = `${base * i}%`
}


function slideLeft() {
    if (count == n - 4) {
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
    if (count == 0) {
        count = (n - 1) - 4
        let tempBase = 75
        for (i = n-1; i >= 0; i--) {
            featureCard[i].style.left = `${tempBase}%`
            tempBase -= 25
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
setInterval(()=>{
    rightBtn.click()
}, 3000)


