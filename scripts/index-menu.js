let toggleMenuStatus = false;

let btn = document.body.querySelector('#hero nav #Menu-Toggle-Btn');
let toggleMenu = document.body.querySelector('#hero #toggleMenu');

let toggleMenuFunc = function () {
    if (toggleMenuStatus === false) {
        toggleMenu.style.left = 0;

        toggleMenuStatus = true;
    }
    else if (toggleMenuStatus === true) {
        toggleMenu.style.left = '-110vw';

        toggleMenuStatus = false;
    }
}

btn.onclick = toggleMenuFunc;


// Check for device width

setInterval(() => {
    let w = window.innerWidth;

    if (w > 768) {
        toggleMenu.style.visibility = "hidden";
    }
    else if (w <= 768) {
        toggleMenu.style.visibility = "visible";
    }
}, 100);