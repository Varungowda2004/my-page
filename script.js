const loader = document.querySelector(".loader");
const playPause = document.querySelector(".ppBtn")
const Mv = document.querySelector(".MV")
const navbar = document.querySelector(".navbar")
const loc = document.querySelector(".place-content")
const map1 = document.querySelector(".map")
const map2 = document.querySelector(".marker-text")
const map3 = document.querySelector(".marker-img")
const hobby1 = document.querySelector(".hobbies-text")
const hobby2 = document.querySelector(".MV")
const hobby3 = document.querySelector(".music-label ")
const hobby4 = document.querySelector(".para")
const hobby5 = document.querySelector(".learning-label")
const hobby6 = document.querySelector(".para1")
const hobby7 = document.querySelector(".codingVideo")
const hobby8 = document.querySelector(".gamingVideo")
const hobby9 = document.querySelector(".gaming-label")
const hobby10 = document.querySelector(".para3")
const theForm = document.querySelector(".main-form")
const submitBtn = document.querySelector(".submit");
const topNavigate = document.querySelector(".topNavigate")
const checkMark = document.querySelector(".svgg")
const fname = document.querySelector("#name-input")
const femail = document.querySelector("#email-input")
const fmessage = document.querySelector("#message-input")

// --------VIDEO PLAY/PAUSE--------

playPause.addEventListener("click", function() {
    if (Mv.paused) {
        Mv.play();
        playPause.innerHTML = "Pause";
        }
    else  {
        Mv.pause(); 
        playPause.innerHTML = "Play";
        }
})


// --------LOADER--------

setInterval(() => {
    loader.style.opacity = "0%";
}, 7000);
setInterval(()=> {
    loader.style.display = "none"
},8000)
setInterval(()=> {
    document.body.style.overflowY = "scroll"
},8000)

function hobbyA(element, motion, time) {
    if(window.scrollY > time){
        element.classList.add(motion)
    }
    else {
        element.classList.remove(motion)
    }
}


// ----------ANIMATIONS----------

document.addEventListener("scroll", ()=> {
    console.log(window.scrollY);

    // -------NAVBAR ANIMATION------- 

    if(window.scrollY > 180){
        navbar.classList.add("scroll-nav")
    }
    else {
        navbar.classList.remove("scroll-nav")
    }
    
    // -------LOCATION ANIMATION-------


    hobbyA(loc, "right-side", 200)
    hobbyA(map1, "scale", 200)
    hobbyA(map2, "left-side", 200)
    hobbyA(map3, "left-side", 200)


    // -------HOBBIES ANIMATION-------


    hobbyA(hobby1, "right-side", 800)
    hobbyA(hobby2, "left-side", 800)
    hobbyA(hobby3, "right-side", 800)
    hobbyA(hobby4, "right-side", 800)


    hobbyA(hobby5, "left-side", 1200)
    hobbyA(hobby6, "left-side", 1200)
    hobbyA(hobby7, "left-side", 1200)


    hobbyA(hobby8, "right-side", 1600)
    hobbyA(hobby9, "left-side", 1600)
    hobbyA(hobby10, "left-side", 1600)

    // -------TOP NAVIGATE------

    if(window.scrollY > 640) {
            topNavigate.style.display = "block"
    }
    else {
            topNavigate.style.display = "none"
    }


})

// ---------FORM DATA---------

theForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    let data = new FormData(theForm);
    submitBtn.innerHTML = "Submitting..."
    fetch("https://script.google.com/macros/s/AKfycbwZxzuVkww7ZOPil_JWx57PpWjvt1zpCpr665cpGYPIlKeRHVgL1tsCxFomo9krUfhi/exec",{method: "POST", body: data} )
    .then(res => res.text())
    .then(data => {
        if(data === "Success") {
            console.log(data);
            checkMark.style.display = "block"
            var start = setInterval(function() {
                submitBtn.innerHTML = "SUBMIT"
                checkMark.style.display = "none"
                theForm.reset();
                clearInterval(start);
            }, 3000)
        }
    });
})


