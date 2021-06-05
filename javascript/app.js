function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
   
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        nav.classList.toggle("transition");
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
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
    }
);




const preloadAnimation = () => {
    const body = document.body;
    const preloadWrapper = document.querySelector('.loader-wrapper');
    const preloadInner =  document.querySelector('.loader');
    setTimeout(function(){
        body.classList.toggle("hide_scrollbars")
        preloadWrapper.style.opacity = 0;
        preloadWrapper.style.transform = "translateX(1000px)";
        preloadWrapper.style.display = "none";
        }, 3000 
     );

    setTimeout(function(){
        preloadInner.style.opacity = 0;
        
        }, 2800 
     );
};

const showLogo = () => {
    const logo = document.querySelector('.logo');
    setTimeout(function(){
        logo.style.transform = "translateY(0)";
        logo.style.opacity = 1;
    }, 3300
    );
};


const showNavlinks = () =>{
    const navlinkItems = document.getElementById("nav-links").children;
    let time = 3400;
    for(let item of navlinkItems) {
        setTimeout(function(){
           item.style.transform = "translateY(0)";
           item.style.opacity = 1;
        }, time);
        time += 100;
    };
};

showHome = () => {
    const homeItems = document.querySelector(".home_data").children;
    let time = 4000;
    for (const item of homeItems) {
        setTimeout(function(){
            item.classList.remove("animation");
         }, time);
         time += 100;
        
    };
};

showBars = () => {
    const leftBar = document.querySelector(".left-side");
    const rightBar = document.querySelector(".right-side");
    setTimeout(function(){
        leftBar.style.opacity = 1;
        rightBar.style.opacity = 1;
    }, 4700);
};

const showElements = () => {
    showLogo();
    showNavlinks();
    showHome();
    showBars();
    
}



const reloadPosition = () => {
    window.onbeforeunload = function () {
    document.body.style.background = "#020c1b";
    const children = document.body.children;
    for (const child of children) {
        child.style.display = "none";
        };
        window.scrollTo(0, 0);  
        };
    };





const app = () => {
    reloadPosition();
    navSlide();
    preloadAnimation();
    cancelAnimation();
    navbarShowHide();
    showElements();
   
};



app();

