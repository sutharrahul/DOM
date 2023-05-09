# Add Element and text using DOM
![Alt text](./Output/DOM%20P2%20SS.png)
**Add Pro Subscriptio Button**
```Javascript
const warapper = document.getElementsByClassName('btn')[0].parentElement;
      let x = document.createElement("a")
        x.classList.add("btn")
        x.textContent="Pro Subscriptio"
        warapper.append(x)
```
---

**Add Recipes**
```Javascript
 const addelemnt = document.querySelector(".tags-container div");
       let ele = document.createElement("a")
       ele.textContent="Chinese (7)";
       addelemnt.append(ele)
```

---

**Add New iteam (Egg Bread breakfast)**
```Javascript
 const banner = document.querySelector(".recipe-gallery");
      const newelement = document.createElement("div");
      newelement.className = "card";
      const aelement = document.createElement("a");
      aelement.href ="#";
      aelement.className ="recipe-text";
      const image = document.createElement("img");
      image.className ="recipe-img"
      image.src ="./img/recipe-6.jpg";
      const htag = document.createElement("h5");
      htag.className = "recipe-name";
      htag.innerText = "Egg bread (Breakfest)";
      const ptag = document.createElement("p");
      ptag.className ="recipe-disp";
      ptag.innerText = "Prep : 15min | Cook : 20min";

      banner.append(newelement);
      newelement.append(aelement);
      aelement.append(image, htag, ptag);
```