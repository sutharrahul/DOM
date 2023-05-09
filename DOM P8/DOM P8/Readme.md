# Task 1
![](./ass8.1-before.png)
![](./ass8.1-after.png)
# Task 2
**Before**
![Alter text](./ass8.2-before.png)<br>
**After**
```Javascript
      document.body.style.backgroundImage = "none";

```
![](./ass8.2-after.png)

# Task 3
**Before**
![](./ass8.3-before.png)
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
![](./ass8.3-after.png)