# Add Element and text using DOM
![](./Output/DOM%20P2%20SS.png)
**Add Recipes**
```Javascript
 const addelemnt = document.querySelector(".tags-container div");
       let ele = document.createElement("a")
       ele.textContent="Chinese (7)";
       addelemnt.append(ele)
```