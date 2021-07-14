(function () {
    const burger = document.querySelector(".nav__burger");
    const nav = document.querySelector(".nav__menu");
    const links = document.querySelectorAll(".nav__link");
    burger.addEventListener("click", () => {
        burger.classList.toggle("burger_active");
        nav.classList.toggle("nav_active");
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = "menuLinksFade";
            }
        });
    });
})();

window.addEventListener("load", () => {
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
});
