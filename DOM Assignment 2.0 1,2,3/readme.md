# DOM Assignment
**Task 1** <br>
Add hire me
![](./firstAssignmentImage/task1Output.png)

``` Javascript
let elul = document.createElement("li");
      elul.innerHTML= "<a>Hire Me </a>";
     let element = document.querySelector("header nav ul");
     element.appendChild(elul)
```

---

**Task 2** <br>
Replace placeholder name Search to Search My project
![](./firstAssignmentImage/task2Output.png)
``` Javascript
 document.querySelector("header nav .search-field input ").placeholder ="Search My Project";
```

----

**Task 3**<br>
Replce paragraph text  
![](./firstAssignmentImage/task3Output.png)
``` Javascript
           const span = document.querySelectorAll(".hero-section .hero-left-section p span");
      for(let i=1; i<3; i++){
        const content = span[i];
        if(i == 1){
          content.textContent="an Employee"
        }
        else if(i == 2){
          content.textContent="iNeuron Intelligence Pvt Ltd."
        }
      }
```

**Task 4**<br>
Replace photo
![](./firstAssignmentImage/task4Output.png)
```Javascript
document.querySelector(".hero-right-section img").src = "hitesh sir.png"
```
---

**Task 4**<br>
Add New button 'Support Me'
![](./firstAssignmentImage/task5Output.png)
```Javascript
let btn = document.createElement("button");
     btn.innerText = "Support Me";
     let element = document.querySelector(".hero-right-section-btns");
     element.appendChild(btn);
```

## SecondAssignmentImage
**Task 1**<br>
Chagebackground color of Heading
![](./secondAssignmentImage/task1Output.png)
``` Javascript
const listOfAllH3Tags = document.querySelectorAll(".accordian-wrapper .accordian h3")
        for(let i=0 ;i<listOfAllH3Tags.length; i++){
          const H3 = listOfAllH3Tags[i];
          H3.style.backgroundColor = "#dadaf8"
        }
```

---
**Task 2** <br>
Add skills and more.
![](./secondAssignmentImage/task2Output.png)
```Javascript
 const elm = document.querySelector(".accordian-wrapper");
        const newelement = document.createElement("div");
        newelement.className = "accordian";
        const newel = document.createElement("h3");
        newel.innerText= "Skills";
        const pele = document.createElement("p");
        pele.innerText = "I posses a very good command over the Full Stack Development technologies like MERN can be see in my work over the Github";

        
        elm.append(newelement);
        newelement.append(newel, pele);
```

---

## ThirdAssignmentImage
**Task 1**
Change placeholder
![](./thirdAssignmentImage/task1Output.png)
```Javascript
document.querySelector(".enterName").placeholder = "FSJS 2.0";
document.querySelector(".enterMail").placeholder = "fsjs@ineuron.ai";
document.querySelector(".enterMessage").placeholder ="Hello world";
document.querySelector(".userName").placeholder = "FSJS 2.0";
document.querySelector(".userEmail").placeholder = "fsjs@ineuron.ai";
document.querySelector(".userMessage").placeholder ="Hello world";
```