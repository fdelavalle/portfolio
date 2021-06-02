function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    
    
    
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        nav.classList.toggle("transition");
        
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
    
}

const cancelAnimation =  () => {
    let resizeTimer; 
    window.addEventListener("resize", () => {
        document.body.classList.add("resize-animation-stopper");
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove("resize-animation-stopper");
        }, 400);
    });
};


const navbarShowHide = () => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    let nav = document.querySelector("nav");
    if (prevScrollpos > currentScrollPos) {
        nav.style.top = "0";
       
    } else {
        nav.style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;   
    }
};//document.querySelector("nav").style.top = "-200px";





const app = () => {
    navSlide();
    cancelAnimation();
    navbarShowHide();
}

app();