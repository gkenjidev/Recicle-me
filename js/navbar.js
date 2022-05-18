document.addEventListener("scroll", (event) => {
    const firstContent = document.querySelector(".navbarscroll");
    const headerHeight = firstContent.offsetTop;

    const scrollPosition = window.scrollY;

    if (scrollPosition > headerHeight) {
        document.querySelector(".navbar-animation").style = "position: fixed; background: linear-gradient(180deg, rgba(0, 56, 5, 0.35) 0%, rgba(15, 186, 29, 0) 149%);; backdrop-filter: blur(22px);"
        
    } else {
        document.querySelector(".navbar-animation").style = "position: absolute;";
        
    }
});

window.scroll({
    behavior: 'smooth'
})