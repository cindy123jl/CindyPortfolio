var icon = document.getElementById("icon");
var desktop = document.getElementById("desktop");
var desktop1 = document.getElementById("desktop1");
var desktop2 = document.getElementById("desktop2");
var desktop3 = document.getElementById("desktop3");
var desktop4 = document.getElementById("desktop4");
var desktop5 = document.getElementById("desktop5");
var mobile = document.getElementById("mobile");
var code1 = document.getElementById("code1");
var code2 = document.getElementById("code2");
var code3 = document.getElementById("code3");


icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./img/sun-icon-mode.png";
        desktop.src ="./img/dark-desktop.png";
        desktop1.src ="./img/dark-desktop.png";
        desktop2.src ="./img/dark-desktop.png";
        desktop3.src ="./img/dark-desktop.png";
        desktop4.src ="./img/dark-desktop.png";
        desktop5.src ="./img/dark-desktop.png";
        mobile.src = "./img/mobile-dark-icon.png";
        code1.src ="./img/code-icon-dark.png";
        code2.src ="./img/code-icon-dark.png";
        code3.src ="./img/code-icon-dark.png";
    
    }
    else{
        icon.src = "./img/moon.png";
        desktop.src ="./img/desktop-icon.png";
        desktop1.src ="./img/desktop-icon.png";
        desktop2.src ="./img/desktop-icon.png";
        desktop3.src ="./img/desktop-icon.png";
        desktop4.src ="./img/desktop-icon.png";
        desktop5.src ="./img/desktop-icon.png";
        mobile.src = "./img/mobile-phone-icon.png";
        code1.src ="./img/code-icon.png";
        code2.src ="./img/code-icon.png";
        code3.src ="./img/code-icon.png";
    }
}
