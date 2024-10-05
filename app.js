const setting = document.querySelector(".setting");
const navRight = document.querySelector(".nav-right");
const faReg = document.querySelector(".fa-regular")
let isVisible = false;
 setting.addEventListener("click",()=>{
    if(!isVisible){
        navRight.style.transform = "translateX(0)"
        // setting.style.left = "80%"
    }
    else{
        navRight.style.transform = "translateX(100%)";
        // setting.style.right = "2%"
    }
    isVisible = !isVisible;
 })
 faReg.addEventListener("click",()=>{
    if(faReg.classList.contains("fa-moon")){
        faReg.classList.remove("fa-moon");
        faReg.classList.add("fa-sun");
    }
    else{
        faReg.classList.remove("fa-sun")
        faReg.classList.add("fa-moon")
    }
    faReg.classList.add("animate")
    setTimeout(() => {
        faReg.classList.remove("animate")
    }, 500);
 })
