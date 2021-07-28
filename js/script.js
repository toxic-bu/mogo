window.addEventListener("load", () => {
    // #burger-menu
    const burger = document.querySelector(".nav__burger");
    const nav = document.querySelector(".nav__menu");
    const body = document.querySelector("body");
    burger.addEventListener("click", () => {
        burger.classList.toggle("burger-active");
        nav.classList.toggle("nav-out");
        body.classList.toggle("fixed");
    });
    nav.addEventListener("click", (el) => {
        if (el.target.classList.contains("nav__menu")) {
            nav.classList.toggle("nav-out");
            burger.classList.toggle("burger-active");
            body.classList.toggle("fixed");
        }
    });
    // #burger-menu

    // #main-slider
    let i = 0;
    let timer;
    const loadbar = document.querySelectorAll(".caption__slider-loadbar");
    const tabs = document.querySelectorAll(".caption__slider-tab");
    const slides = document.querySelectorAll(".caption__slider");
    init(0);
    tabs.forEach((elem, index) => {
        elem.addEventListener("click", () => {
            loadbar.forEach((el) => {
                el.classList.remove("active");
            });
            tabs.forEach((el) => {
                el.classList.remove("active");
            });
            slides.forEach((el) => {
                el.classList.remove("slide-out");
                el.classList.remove("slide-in");
            });
            if (i != index) {
                slides[i].classList.add("slide-out");
            } else {
                slides[i].classList.add("slide-in");
            }
            i = index;
            clearInterval(timer);
            init(0);
        });
    });
    function init(interval) {
        setTimeout(() => {
            loadbar[i].classList.add("active");
            tabs[i].classList.add("active");
        }, 1);
        setTimeout(() => {
            slides[i].classList.add("slide-in");
        }, 300);
        interval = 5000;
        timer = setInterval(() => {
            loadbar.forEach((el) => {
                el.classList.remove("active");
            });
            tabs.forEach((el) => {
                el.classList.remove("active");
            });
            slides.forEach((el) => {
                el.classList.remove("slide-out");
            });
            slides[i].classList.remove("slide-in");
            slides[i].classList.add("slide-out");
            i++;
            if (i >= loadbar.length) {
                i = 0;
            }
            setTimeout(() => {
                slides[i].classList.add("slide-in");
            }, 300);
            loadbar[i].classList.add("active");
            tabs[i].classList.add("active");
        }, interval);
    }
    // #service-slider
    const serviceSlider = document.querySelectorAll(".service__accordion-slide");
    serviceSlider[0].classList.toggle("active");
    serviceSlider.forEach((elem, index) => {
        elem.addEventListener("click", () => {
            for (i = 0; i < serviceSlider.length; i++) {
                if (i != index) {
                    serviceSlider[i].classList.remove("active");
                }
            }
            elem.classList.toggle("active");
        });
    });
    // #comments
    const track = document.querySelector(".comments__track");
    const btnPrev = document.querySelector(".comments__prev");
    const btnNext = document.querySelector(".comments__next");
    const slideWidth = document.querySelector(".comments__item").offsetWidth;
    const itemsCount = document.querySelectorAll(".comments__item").length;
    let position = 0;
    checkBtns();

    btnPrev.addEventListener("click", () => {
        position += slideWidth;
        checkBtns();
        setPosition();
    });
    btnNext.addEventListener("click", () => {
        position -= slideWidth;
        checkBtns();
        setPosition();
        console.log(itemsCount, slideWidth, position);
    });
    function setPosition() {
        track.style.transform = `translateX(${position}px)`;
    }
    function checkBtns() {
        if (position == 0) {
            btnPrev.setAttribute("disabled", "disabled");
        } else {
            btnPrev.removeAttribute("disabled");
        }
        console.log(itemsCount, slideWidth, position);
        if (-((itemsCount - 1) * slideWidth) >= position) {
            btnNext.setAttribute("disabled", "disabled");
        } else {
            btnNext.removeAttribute("disabled");
        }
    }
});
