const setting = document.querySelector(".setting");
const navRight = document.querySelector(".nav-right");
 setting.addEventListener("click",()=>{
    navRight.style.transform = "translateX(0)"
    setting.style.left = "80%"
    setting.onclick = function(){
        setting.style.left = "-20%"
        navRight.style.transform = "translate(100%)"
        return;
    }
    return;
 })