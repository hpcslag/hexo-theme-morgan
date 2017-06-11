let sloganBar = document.getElementById("slogan-bar");
let slogan_position = 0;
if(slogans.length > 1){
    callFadeIn(slogans[slogan_position]);
    slogan_position += 1;

    setInterval(()=>{
        callFadeOut();
        setTimeout(()=>{
            callFadeIn(slogans[slogan_position]);
            slogan_position += 1;
            if(slogan_position == slogans.length) slogan_position = 0;
        },1000);
    },5000);
}

function callFadeIn(text){
    sloganBar.innerText = text;
    sloganBar.classList.remove("fadeOutUp");
    sloganBar.classList.remove("animated");
    sloganBar.className += " animated fadeInUp";
}

function callFadeOut(){
    sloganBar.classList.remove("fadeInUp");
    sloganBar.classList.remove("animated");
    sloganBar.className += " animated fadeOutUp";
}

//help page number insert class
let pgnm = document.getElementsByClassName("page-number");
let pgextendnext = document.getElementsByClassName("extend next")[0];
let pgextendprev = document.getElementsByClassName("extend prev")[0];

if(!!pgextendnext) pgextendnext.className += " item";

if(!!pgextendprev) pgextendprev.className += " item";

for(let e in pgnm){
    pgnm[e].className += " item";
}

//detective url is user goto tag search page
var tagPosi = location.href.split('/').indexOf("tags");
if(tagPosi != -1){
    document.getElementById("big-title").innerText += " - #" + location.href.split('/')[tagPosi+1];
}

//support youtube

//support code highlight