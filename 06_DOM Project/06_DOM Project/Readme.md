# Change using DOM
**Change logo**
![](./Output/DOM%20P3%20SS-1.png)
```Javascript
 // Change Logo
    const ineuron = document.querySelector(".logo").src = "./assets/ineuron-logo.png"
```
**App price and add LinkedIn logo**
![](./Output/DOM%20P3%20SS-2.png)
```Javascript
 // Change Fee
    const price = document.querySelector(".app_price span").textContent = "$10";
    // Add linkedin logo
    const linkedin = document.querySelector(".footer_social");
    const linkedinlogo = document.createElement("div");
    linkedinlogo.className = "footer_social_ico";
    const itag = document.createElement("i")
    itag.className = "fa-brands fa-linkedin";

    linkedin.append(linkedinlogo);
    linkedinlogo.append(itag);
```