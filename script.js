window.onload = () => {
    let loader_con = document.getElementById("loader-con");
    let load = document.getElementById("loader");
    load.style.padding = "10000%";
    load.style.animation = "none";
    loader_con.style.animation = "fade .5s";
    setTimeout(function(){
        loader_con.style.display = "none";
    },500);
}


const carousel_scroll = document.getElementById("carousel-scroll");
const carousel = document.getElementById("carousel");
const article2 = document.getElementsByClassName("article");
const next = document.getElementById("right");
const prev = document.getElementById("left");

let count = 1;

const size = carousel_scroll.clientWidth/5;

carousel_scroll.style.transform = `translateX(${-size * count}px)` ;

next.onclick = () => {
    if(count >= article2.length - 1) return;
    carousel_scroll.style.transition = "transform 0.4s ease-in-out";
    count++;
    carousel_scroll.style.transform = `translateX(${-size * count}px)` ;
}

prev.onclick = () => {
    if (count <= 0) return;
    carousel_scroll.style.transition = "transform 0.4s ease-in-out";
    count--;
    carousel_scroll.style.transform = `translateX(${-size * count}px)` ;
}

carousel_scroll.ontransitionend = () => {
    if(article2[count].id === 'last'){
        carousel_scroll.style.transition = "none";
        count = article2.length - 2;
        carousel_scroll.style.transform = `translateX(${-size * count}px)` ;
    }
    if(article2[count].id === 'first'){
        carousel_scroll.style.transition = "none";
        count = article2.length - count;
        carousel_scroll.style.transform = `translateX(${-size * count}px)` ;
    }
}


//scrollup

function scroll(){
    const btn = document.getElementById("up");
    btn.onclick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }
}
scroll();


console.log(window.pageYOffset);
window.onscroll = () => {
    if(window.pageYOffset >= 200){
        document.getElementById("up").style.display = "grid";
    }
    else{
        document.getElementById("up").style.display = "none";
    }
}

const hambtn = document.getElementById("menu-bar");
hambtn.onclick = () => {
    document.getElementById("menu-bar-mob").style.display = "grid";
    document.body.style.overflow = "hidden";
}


const cross = document.getElementById("menu-bar-2");
cross.onclick = () => {
    document.getElementById("menu-bar-mob").style.display = "none";
    document.body.style.overflow = "";
}