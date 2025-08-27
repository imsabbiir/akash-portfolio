let humbarg = document.getElementById('humbarg');
let menu = document.querySelector("menu");
let btt = document.querySelector(".btt");
let computerDark = document.querySelector('.theme');
let mobileDark = document.querySelector('.mobile-theme');
let body = document.querySelector('body');

computerDark.addEventListener('click', ()=>{
  body.classList.toggle('dark');
  computerDark.classList.toggle('fa-moon');
});
mobileDark.addEventListener('click', ()=>{
  body.classList.toggle('dark');
  mobileDark.classList.toggle('fa-moon');
});




humbarg.addEventListener('click', ()=> {
    humbarg.classList.toggle("fa-times");
    if(menu.style.left != "0%"){
        menu.style.left = "0%";
    }
    else{
        menu.style.left = "110%";
    }
    
});






// ON SCROLL BOTTOM TO TOP BUTTON SHOW AND THE MENU ITEM STYLE ACTIVE
let navLinks = document.querySelectorAll(".computer ul li a");
let sections = document.querySelectorAll("section");
let navLinksm = document.querySelectorAll(".mobile ul li a");
btt.style.display = "none";
window.addEventListener("scroll",()=>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset =sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id =sec.getAttribute('id');
        if(top >= offset && top< offset + height){
            navLinks.forEach(link => {
                link.classList.remove("menu-active");
                document.querySelector('.computer ul li a[href*=' + id + ']').classList.add('menu-active');
            });
            navLinksm.forEach(link => {
                link.classList.remove("menu-active");
                document.querySelector('.mobile ul li a[href*=' + id + ']').classList.add('menu-active');
            });
            
        };
    });
    humbarg.classList.remove("fa-times");
    menu.style.left = "110%";
    if(window.scrollY >= 400){
        btt.style.display = "block";
    }else{
        btt.style.display = "none";
    }
});

// ON CLICK BOTTOM TO TOP BUTTON IT SCROLL TOP
btt.addEventListener('click', ()=>{
    window.scrollTo(0, 0);
});

// PORTFOLIO FILTER AND ACTIVE CETAGORY
const filterButtons = document.querySelectorAll(".portfolio-btn");


// Get all portfolio items
const portfolioItems = document.querySelectorAll('.filter-item');

// Add click event listener to each filter button
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filterValue = button.getAttribute('data-filter');

    // Remove 'active' class from all buttons
    filterButtons.forEach(btn => {
      btn.classList.remove('portfolio-active');
    });

    // Add 'active' class to the clicked button
    button.classList.add('portfolio-active');

    // Show/hide portfolio items based on the selected filter
    portfolioItems.forEach(item => {
        item.style.animation = 'fade-out 0.3s forwards';
        setTimeout(() => {
          // Show/hide portfolio items based on the selected filter
          if (filterValue === 'all' || item.classList.contains(filterValue)) {
            item.style.display = 'block';
            item.style.animation = 'fade-in 0.3s ease';
          } else {
            item.style.display = 'none';
          }
        });
    });
  });
});

// TESTIMONIAL SWIPER SLIDER
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 250000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  // scrollReveal behavior code 


    // origin: 'top',
    // distance: '60px',
    // duration: 2000,
    // delay: 100,



  ScrollReveal().reveal('.home-contant',{origin:'top', distance:'60px', duration:2000, delay: 100});
  ScrollReveal().reveal('#about h2',{origin:'tor', distance:'60px', duration:1000, delay: 100});
  ScrollReveal().reveal('#about .details img',{origin:'top', distance:'60px', duration:2000, delay: 100});
  ScrollReveal().reveal('#about .details .box',{origin:'bottom', distance:'60px', duration:2000, delay: 100});
  ScrollReveal().reveal('#about .about-footer',{origin:'left', distance:'60px', duration:2000, delay: 100});
  ScrollReveal().reveal('#portfolio h2',{origin:'left', distance:'60px', duration:1000, delay: 100});
  ScrollReveal().reveal('#portfolio .data-filter-btn',{origin:'top', distance:'60px', duration:2000, delay: 100});
  ScrollReveal().reveal('#portfolio .data-filter',{origin:'bottom', distance:'60px', duration:2000, delay: 100});
  ScrollReveal().reveal('#testimonial .title h2',{origin:'left', distance:'60px', duration:1000, delay: 100});
  ScrollReveal().reveal('#testimonial .mySwiper',{origin:'top', distance:'60px', duration:2000, delay: 100});
  ScrollReveal().reveal('#blog .title h2',{origin:'left', distance:'60px', duration:1000, delay: 100});
  ScrollReveal().reveal('#blog .data-filter',{origin:'top', distance:'60px', duration:2000, delay: 100});
  ScrollReveal().reveal('#contact .title h2',{origin:'left', distance:'60px', duration:1000, delay: 100});
  ScrollReveal().reveal('#contact .details',{origin:'top', distance:'60px', duration:2000, delay: 100});
  ScrollReveal().reveal('#contact .form',{origin:'bottom', distance:'60px', duration:2000, delay: 100});
  ScrollReveal().reveal('footer p',{origin:'top', distance:'60px', duration:1000, delay: 100});

