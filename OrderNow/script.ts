let menu: HTMLElement | null = document.querySelector(".ri-menu-line");
let side_bar: HTMLElement | null = document.querySelector(".side-bar");
let count: number = 1;
if (menu) {
    menu.addEventListener("click", () => {
        if (count === 1) {
            menu!.classList.replace("ri-menu-line", "ri-close-line");
            side_bar!.style.display = "flex";
            count++;
            console.log("count-if", count);
        }
        else {
            menu!.classList.replace("ri-close-line", "ri-menu-line");
            side_bar!.style.display = "none";
            count--;
            console.log("count-else", count);
        }
    }
    )
}
let single: HTMLElement | null = document.querySelector(".single-flavour");
let double: HTMLElement | null = document.querySelector(".double-flavour");
let single_list: HTMLElement | null = document.querySelector(".single-list");
let double_list: HTMLElement | null = document.querySelector(".double-list");
let Parent: HTMLElement | null = document.querySelector(".hidden");
let parent1: HTMLElement | null = document.querySelector(".flavours");
single!.addEventListener("click", (event: MouseEvent) => {
    Parent!.style.display = "flex";
    single_list!.style.display = "block";
    double_list!.style.display = "none";
    single!.style.opacity = "0.5";
    double!.style.opacity = "1";
    (single as HTMLButtonElement).disabled = true;
    (double as HTMLButtonElement).disabled = false;
    parent1!.style.height = "400px";
    Parent!.style.backgroundColor = "burlywood";
});
double!.addEventListener("click", (evevt2: MouseEvent) => {
    Parent!.style.display = "flex";
    double_list!.style.display = "block";
    single_list!.style.display = "none";
    double!.style.opacity = "0.5";
    single!.style.opacity = "1";
    (double as HTMLButtonElement).disabled = true;
    (single as HTMLButtonElement).disabled = false;
    parent1!.style.height = "400px";
    Parent!.style.backgroundColor = "burlywood";
});
