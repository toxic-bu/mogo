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
    // #main-slider
    const accordionBtn = document.querySelectorAll(".service__accordion-nav-button");
    const accordionBtnUp = document.querySelectorAll(".service__accordion-nav-button-up");
    const accordionBtnDown = document.querySelectorAll(".service__accordion-nav-button-down");
    const accordionWrapper = document.querySelectorAll(".service__accordion-content-wrapper");
    accordionWrapper[0].classList.toggle("active");
    accordionBtnUp[0].classList.toggle("active");
    accordionBtnDown[0].classList.toggle("active");

    accordionBtn.forEach((elem, i) => {
        elem.addEventListener("click", function () {
            accordionWrapper.forEach((elem) => {
                elem.classList.remove("active");
            });
            accordionBtnUp.forEach((elem) => {
                elem.classList.remove("active");
            });
            accordionBtnDown.forEach((elem) => {
                elem.classList.add("active");
            });
            if (!accordionWrapper[i].classList.contains("active")) {
                accordionWrapper[i].classList.add("active");
            }
            accordionBtnUp[i].classList.add("active");
            accordionBtnDown[i].classList.remove("active");
        });
    });
});
