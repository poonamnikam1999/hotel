// header scroll
let nav=document.querySelector(".navbar");
window.onscroll=function () {
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}

// nav hide
let navBar=document.querySelectorAll(".nav-link");
let navCollapse=document.querySelector(".navbar-collapse.collapse");
 navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
 })

// swiper slider
var swiper=new Swiper(".mySwiper",{
    direction: "vertical",
    loop:true,
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
    autoplay: {
        delay: 3500,
    },
});


// counter design
document.addEventListener("DOMContentLoaded",()=>{
    function counter(id,start,end,duration){
        let obj=document.getElementById(id),
        current=start,
        range=end - start,
        increment = end > start ? 1 : -1,
        step= Math.abs(Math.floor(duration / range)),
        timer = setInterval(()=>{
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);

    }
    counter("count1", 0, 1287,3000);
    counter("count2", 100,5786,2500);
    counter("count3" , 0,1440,3000);
    counter("count4" , 0, 7110,3000);
    // 3)duration 2)random number
})


// our partner
var swiper = new Swiper(".our-partner",{
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        // screen size
        '991': {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        '767': {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        '320': {
            slidesPerView: 2,
            spaceBetween: 8,
        },
    },
});



// angualr core material rxjs ngrx
// 7type:sdlc:unit testing integrate testing
// requirement  design define
// deployment:aws/google
// maintaince
// req 
// designation
// software management
// agile model :req design define coding testing deployment maintaince
// sprint 
// agile  ceremony:1.sprintplanning---15 start 2.sprint review---mid 3.standup--15min--daily check
//  4.sprint retrospectrum 5.backlock grooming---new feature
// scrum member-------jira----ios
// l1 --logical array string pattren dsa math
// waterfol model
// dsa:digital signature algorithm
