const arrowUp = document.body.querySelector("#arrow-up");
const arrowDown = document.body.querySelector("#arrow-down");
const arrowUp1 = document.body.querySelector("#arrow-up1");
const arrowDown1 = document.body.querySelector("#arrow-down1");

const icon = document.body.querySelector("#icon");
const hcon = document.body.querySelector("#hcon");

arrowDown.addEventListener("click", () => {
    arrowDown.className = "unseen";
    arrowUp.className = "";
    icon.className = "ren"
    
})

arrowUp.addEventListener("click", () => {
    arrowUp.className = "unseen";
    arrowDown.className = "";
    icon.className = "unseen"

})

arrowDown1.addEventListener("click", () => {
    arrowDown1.className = "unseen";
    arrowUp1.className = "";
    hcon.className = "ren"
})

arrowUp1.addEventListener("click", () => {
    arrowUp1.className = "unseen";
    arrowDown1.className = "";
    hcon.className = "unseen"
})