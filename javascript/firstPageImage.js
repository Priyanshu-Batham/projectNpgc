let arr = document.querySelectorAll(".firstPageImage")

let counter = 0

for(i = 0; i<arr.length; i++){
    arr[i].style.left = `${i*100}%`
}


function slideLeft(){
    if(counter == arr.length-1){
        counter = 0
        for(i = 0; i<arr.length; i++){
            arr[i].style.transform = `translateX(0%)`
        }
    }
    else{
        counter++
        for(i = 0; i<arr.length; i++){
            arr[i].style.transform = `translateX(${-counter*100}%)`
        }
    }
}

setInterval(slideLeft, 3000)