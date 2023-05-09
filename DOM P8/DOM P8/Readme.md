# Task 1
![Alt text](./ass8.1-before.png)
![Alt text](./ass8.1-after.png)
# Task 2
**Before**
![Alt text](./ass8.2-before.png)<br>
**After**
```Javascript
      document.body.style.backgroundImage = "none";

```
![Alt text](./ass8.2-after.png)

# Task 3
**Before**
![Alt text](./ass8.3-before.png)
**After**
```Javascript
      function toggler(){
        const toggle = document.querySelector(".collapse");
        if (toggle.style.display === "none") {
            toggle.style.display = "flex";
        } else {
          toggle.style.display = "none";
        }
      }
      document.querySelector(".navbar-toggler").addEventListener("click",toggler);

```
![Alt text](./ass8.3-after.png)