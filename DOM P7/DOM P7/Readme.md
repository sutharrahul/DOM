# Task 1
**Remove the languages that have 2.0 in their name(Every alternative language)**
![Alt text](./ass7.1-after.png)
```Javascript
const arr = document.querySelectorAll(".main__languages a");
        for(let i=0; i<arr.length; i++){
          console.log(arr);
          if(arr[i].innerHTML.indexOf("2.0")!=-1){
            arr[i].remove();
          }
        }
```
# Task 2
**Use JavaScript to write something in the input box and submit the form. This should refresh the page and the languages in the left card should come back.**
![Alt text](./ass7.2-after.png)
```Javascript
document.querySelector(".main__form-input").disabled = false;
      document.querySelector(".main__form-btn").disabled = false;
if(localStorage.getItem('flag')!='true'){
        
        const arr = document.querySelectorAll(".main__languages a");
        for(let i=0; i<arr.length; i++){
          console.log(arr);
          if(arr[i].innerHTML.indexOf("2.0")!=-1){
            arr[i].remove();
          }
        }
        
        localStorage.setItem('flag','true');
      }
```