document.querySelector(".clash-card__unit-stats--barbarian").style.backgroundColor = "#ec9b3b";
document.querySelector(".clash-card__unit-stats--archer").style.backgroundColor = "#ee5487";
document.querySelector(".clash-card__unit-stats--giant").style.backgroundColor = "#f6901a";
document.querySelector(".clash-card__unit-stats--goblin").style.backgroundColor = "#82bb30"
document.querySelector(".clash-card__unit-stats--wizard").style.backgroundColor = "#4facff"

const clr =  document.querySelectorAll(".clash-card__unit-stats")    ;
for(let i=0 ;i<clr; i++){
    let newclr = clr[i];
    newclr.style.color = "#fef2d8";
}