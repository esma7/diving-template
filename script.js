
let counter = 0;
const next = document.getElementById("next")
const prev = document.getElementById("prev")
const slider = document.getElementById("slider")
const slide = document.getElementsByClassName("slide");




function setFunc() {
    if (counter < slide.length - 1) {
        counter++;

        slider.style.left = `-${counter * 1519}px`
    } else {
        counter = 0;
        slider.style.left = `-${counter * 1519}px`
    }

}

let timer = setInterval(setFunc, 5000)


next.addEventListener("click", setFunc)


prev.addEventListener("click", () => {
    if (counter == 0) {

        counter = slide.length - 1

        slider.style.left = `-${counter * 1519}px`
    } else {
        counter--
        slider.style.left = `-${counter * 1519}px`
    }
})


let translateXValue = 0;

next.addEventListener("click", () => transFunc());
prev.addEventListener("click", () => transFunc());

function transFunc() {
    translateXValue += 20;
    const infoElements = document.querySelectorAll(".info");
    infoElements.forEach(item => {
        item.style.transform = `translateX(${translateXValue}px)`;
        item.style.opacity = "1";
    });

    console.log(infoElements);
}


window.addEventListener("scroll", () => {
    let navi = document.querySelector("nav")
    let liColor = document.getElementsByClassName("color")
    if (window.scrollY >= 100) {
        navi.classList.add("headerAnime")
        navi.style.position = "fixed";
        navi.style.top = "0";
        navi.style.width = "1519px"
        for (let i = 0; i < liColor.length; i++) {
            liColor[i].style.color = "#2e2c2c";
        }

    } else {
        navi.classList.remove("headerAnime")
        navi.style.position = "";
        for (let i = 0; i < liColor.length; i++) {
            liColor[i].style.color = "";
        }
    }
})


const loader = document.getElementById('preloader')
window.addEventListener("load", function () {

    setTimeout(() => {
        loader.style.display = "none"
    }, 1000)

})


window.addEventListener('scroll', function () {
    const moveright = document.getElementById('movementright');
    const moveleft = document.getElementById("movementleft");
    if (window.scrollY >= 500) {
        moveright.style.transform = 'translateX(0px)';
        moveleft.style.transform = 'translateX(0px';
    }
});

function handleScroll() {
    const valueDisplay = document.querySelectorAll(".num");
    let interval = 5000;
    if (window.scrollY >= 700) {
        valueDisplay.forEach((item) => {
            let startValue = 0;
            let endValue = parseInt(item.getAttribute("data-val"));
            let duration = Math.floor(interval / endValue);
            let counter = setInterval(function () {
                startValue += 1;
                item.textContent = startValue;
                if (startValue == endValue) {
                    clearInterval(counter);
                }
            }, duration);
        });
        window.removeEventListener("scroll", handleScroll);
    }
}

window.addEventListener("scroll", handleScroll);














