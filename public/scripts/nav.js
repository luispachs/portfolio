var _a;
let burgerButton = document.getElementsByClassName("burger-button");
for (let button of burgerButton) {
    let elem = button;
    let target = (_a = elem.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector(".nav");
    if (navigator["userAgentData"].mobile) {
        button.addEventListener("touchstart", (e) => { showMenu(e, target); });
    }
    else {
        button.addEventListener("click", (e) => { showMenu(e, target); });
    }
}
function showMenu(e, target) {
    target.classList.toggle('show');
}
