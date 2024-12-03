// header scroll
let  nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled")
    }
}

// navbar
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})


// Swiper slider
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop:true,
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3500,
    },
});

// counter
document.addEventListener("DOMContentLoaded", function () {
    
    function animateCounter(id, start, end, duration) {
      let current = start;
      const increment = (end - start) / (duration / 50);
      const element = document.getElementById(id);
  
      if (element) {
        const interval = setInterval(() => {
          current += increment;
          if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(interval);
          }
          element.innerText = Math.floor(current);
        }, 50);
      }
    }
  
    // Observer to detect when counter section comes into view
    const observer = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
        
            animateCounter("count1", 0, 45, 2000); 
            animateCounter("count2", 0, 65, 2000); 
            animateCounter("count3", 0, 85, 2000); 
            animateCounter("count4", 0, 95, 2000); 
            observer.disconnect(); 
          }
        });
      },
      { threshold: 0.5 } 
    );
  
    const counterSection = document.querySelector(".counter");
    if (counterSection) {
      observer.observe(counterSection);
    }
});
  

// Our partner
var swiper = new Swiper(".our-partner", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true, 
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        '991' : {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        '767' : {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        '320' : {
            slidesPerView: 2,
            spaceBetween: 8,
        },
    },
});

// Jquery for date showing on mobile 

/**
 * Detect Mobile device
 */
var isMobile = false; //initiate as false
// device detection
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  isMobile = true;
}

jQuery('input[type="date"]').change(function() {
  console.log("Hello function is here");
  if( isMobile) {
    console.log("test");
    if (!jQuery(this).val()) {
      jQuery(this).addClass('mobile');
    }
    else {
      jQuery(this).removeClass('mobile');
    }
  }
});
