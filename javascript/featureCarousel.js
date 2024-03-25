let featureCard = document.querySelectorAll(".featureCard")
base = 100/3
console.log(featureCard)

for(i = 0; i<featureCard.length; i++){
    featureCard[i].style.left = `${base*i}%`
}
