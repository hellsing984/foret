const reveals = document.querySelectorAll(".feature");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    /* REVEAL */
    reveals.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screen = window.innerHeight - 120;

        if (position < screen) {
            element.classList.add("active");
        }
    });

    /* PARALLAXE */
    const parallax = Math.min(scrollY * 0.4, 300);
    hero.style.backgroundPositionY = parallax + "px";

});
