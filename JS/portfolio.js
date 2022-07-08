var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./img/sunmode.png";
        typing.src ="./img/video/darkvideo.mp4";
    }
    else{
        icon.src = "./img/moonmode.png";
        typing.src ="./img/video/pinkvideo.mp4";
    }
}
