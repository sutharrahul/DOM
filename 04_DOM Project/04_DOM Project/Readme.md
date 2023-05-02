# Task 
![](./Output/DOM%20P1%20SS.png)
```Javascript
// Change stats background color
document.querySelector(".clash-card__unit-stats--barbarian").style.backgroundColor = "#ec9b3b";
document.querySelector(".clash-card__unit-stats--archer").style.backgroundColor = "#ee5487";
document.querySelector(".clash-card__unit-stats--giant").style.backgroundColor = "#f6901a";
document.querySelector(".clash-card__unit-stats--goblin").style.backgroundColor = "#82bb30"
document.querySelector(".clash-card__unit-stats--wizard").style.backgroundColor = "#4facff"

// Change stats font color
const tex = document.querySelectorAll(".wrapper .clash-card .clash-card__unit-stats .one-third");
for(let i=0 ;i<tex.length; i++){
    const newcolor = tex[i];
    newcolor.style.color = "#f0efea"
 }

// Change Character Name (The Archer and The Goblin)
 function changeCharacterName(className, newName) {
    const clashCard = document.getElementsByClassName(className)[0];
    const char2 = clashCard.children[2];
    char2.innerHTML = newName;
}

changeCharacterName("archer", "The Archer");
changeCharacterName("goblin", "The Goblin");
```
