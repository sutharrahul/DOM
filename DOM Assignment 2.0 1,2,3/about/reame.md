**Task 1**<br>
Change backgroundcolor.
![Alt text](./task1Output.png)
```Javascript
const listOfAllH3Tags = document.querySelectorAll(".accordian-wrapper .accordian h3")
        for(let i=0 ;i<listOfAllH3Tags.length; i++){
          const H3 = listOfAllH3Tags[i];
          H3.style.backgroundColor = "#dadaf8"
        }
```