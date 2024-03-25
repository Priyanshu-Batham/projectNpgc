let arr = document.querySelectorAll(".firstPageImage")

let counter = 0

for(i = 0; i<arr.length; i++){
    arr[i].style.left = `${i*100}%`
}


function slideLeft(){
    if(counter == arr.length-1){
        counter = 0
        for(i = 0; i<arr.length; i++){
            arr[i].style.left = `${i*100}%`
        }
    }
    else{
        counter++
        for(i = 0; i<arr.length; i++){
            let val = Number.parseInt(arr[i].style.left)
            arr[i].style.left = `${val-100}%`
        }
    }
}

setInterval(slideLeft, 3000)