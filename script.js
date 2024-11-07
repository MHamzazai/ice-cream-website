"use strict";
let menu = document.querySelector(".ri-menu-line");
let side_bar = document.querySelector(".side-bar");
let count = 1;
if (menu) {
    menu.addEventListener("click", () => {
        if (count === 1) {
            menu.classList.replace("ri-menu-line", "ri-close-line");
            side_bar.style.display = "flex";
            count++;
            console.log("count-if", count);
        }
        else {
            menu.classList.replace("ri-close-line", "ri-menu-line");
            side_bar.style.display = "none";
            count--;
            console.log("count-else", count);
        }
    });
}
