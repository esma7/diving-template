
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


const divingImg = document.querySelector(".image")
const diver1 = document.getElementById("diver1")
const diver2 = document.getElementById("diver2")
const diver3 = document.getElementById("diver3")


function removeActiveClass() {
    diver1.classList.remove("selected");
    diver2.classList.remove("selected");
    diver3.classList.remove("selected");
}

function firstImg() {
    divingImg.src = "./assets/img/product-big-1-543x558.png"
    removeActiveClass();
    diver1.classList.add("selected")
}
function secondImg() {
    divingImg.src = "./assets/img/product-big-2-543x558.png"

    removeActiveClass();
    diver2.classList.add("selected")
}
function thirdImg() {
    divingImg.src = "./assets/img/product-big-3-543x558.png"

    removeActiveClass();
    diver3.classList.add("selected")
}


const accordBtn = document.querySelectorAll(".accordion-button");
const accordContent = document.querySelectorAll(".accordion-content");

accordBtn.forEach((button, index) => {
    button.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default behavior
        accordContent[index].classList.toggle("accordion_active");
    });
});



const overlays = document.querySelectorAll(".overlay");

overlays.forEach(overlay => {
    overlay.addEventListener("mouseover", () => {
        overlay.querySelector(".moveText").classList.add("animate");
        overlay.querySelector(".searchImg").classList.add("animate2");
    });

    overlay.addEventListener("mouseout", () => {
        overlay.querySelector(".moveText").classList.remove("animate");
        overlay.querySelector(".searchImg").classList.remove("animate2");

    });
});





var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

document.querySelectorAll('.searchImg').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        var img = this.closest('.isotope-item').querySelector('img');
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}


const clientContent = document.querySelector(".client-body .client-content");
const overlayClient1 = document.querySelector(".overlayClient1")
const overlayClient2 = document.querySelector(".overlayClient2")
const overlayClient3 = document.querySelector(".overlayClient3")

const clientButton1 = document.getElementById("client-figure1");
const clientButton2 = document.getElementById("client-figure2");
const clientButton3 = document.getElementById("client-figure3");




function firstContent() {
    clientContent.innerHTML = `I had a fantastic weekend at Stoney Cove with your team. Great people who made my wife (Lisa) and I feel very welcome. Thanks for all your help and support with the diving!`;

    overlayClient1.style.opacity = "0";

}

function secondContent() {
    clientContent.innerHTML = `What a fantastic weekend spent with the amazingly friendly team at Divers! You made us feel very welcome and you all were amazing. Thank you!`;
    overlayClient2.style.opacity = "0";

}

function thirdContent() {
    clientContent.innerHTML = `It was a great first time dive, the team was very friendly and attentive I will have no hesitation going again and recommending you to all my friends and colleagues.`;
    overlayClient3.style.opacity = "0";

}





