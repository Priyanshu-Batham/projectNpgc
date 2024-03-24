//-------Nav Bar Toggle--------->>
let flag = false;

function toggleNav() {
  let sideBar = document.getElementById("mySidebar")
  if (!flag) sideBar.style.left = 0
  else sideBar.style.left = '-20%'

  flag = !flag;
}

//-------Header Toggle on scroll--------->>
let prevScrollY = 0
let head = document.querySelector(".header")

window.addEventListener("scroll", () => {
  let currScrollY = window.scrollY
  if(currScrollY > prevScrollY){
    head.style.top = '-10vh'
  }
  else{
    head.style.top = '0'
  }
  
  prevScrollY = currScrollY
})