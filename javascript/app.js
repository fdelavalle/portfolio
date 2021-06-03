function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const faders = document.querySelectorAll(".fade_in");
    

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
    
};

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
    const navLinks = document.querySelectorAll(".nav-links li");
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    let nav = document.querySelector("nav");
    if(window.pageYOffset == 0.0){
        nav.style.opacity = 1;
        nav.style.boxShadow = "none";
        nav.style.filter = "none";
        
        
    }
    
    if (prevScrollpos > currentScrollPos) {
        nav.style.top = "0";
       
    } else {
        nav.style.top = "-15vh";
        nav.style.boxShadow =  "0px 3px 15px #09102A";
        nav.style.opacity = 0.96;
     } 
    prevScrollpos = currentScrollPos;   
    }
};

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px 0px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(entries, appearOnScroll) 
{
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });

}, appearOptions);

const faders = document.querySelectorAll(".fade_in")
faders.forEach(fader => {
    appearOnScroll.observe(fader);
})





const app = () => {
    navSlide();
    cancelAnimation();
    navbarShowHide();
}

app();