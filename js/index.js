
let popup1 = document.getElementById('popup1');
let popup2 = document.getElementById('popup2');
let popup3 = document.getElementById('popup3');
let popup4 = document.getElementById('popup4');
let body = document.getElementById('body');

// open page view 1
document.getElementById('btn1').addEventListener('click', function(){
    popup1.style.display = "block";
    body.style.overflow = "hidden"; // disable scrolling
});

// close page view 1
document.getElementById('close-btn1').addEventListener('click', function(){
    popup1.style.display = "none";
    body.style.overflowY = "visible";
});

// open page view 2
document.getElementById('btn2').addEventListener('click', function(){
    popup2.style.display = "block";
    body.style.overflow = "hidden"; // disable scrolling
});

// close page view 2
document.getElementById('close-btn2').addEventListener('click', function(){
    popup2.style.display = "none";
    body.style.overflowY = "visible";
});

// open page view 3
document.getElementById('btn3').addEventListener('click', function(){
    popup3.style.display = "block";
    body.style.overflow = "hidden"; // disable scrolling
});

// close page view 3
document.getElementById('close-btn3').addEventListener('click', function(){
    popup3.style.display = "none";
    body.style.overflowY = "visible";
});

// open page view 4
document.getElementById('btn4').addEventListener('click', function(){
    popup4.style.display = "block";
    body.style.overflow = "hidden"; // disable scrolling
});

// close page view 4
document.getElementById('close-btn4').addEventListener('click', function(){
    popup4.style.display = "none";
    body.style.overflowY = "visible";
});


// AOS - Animate On Scroll Library
AOS.init({
    once: true, // Apply to all
});

// SLICK - Accordion, toggle effect on hover
function toggleIconDetail() {
    if (window.innerWidth > 1100) {
        // Enable hover toggle effect for larger screens
        $('.icon-box').on('mouseenter', function() {
            $(this).toggleClass('is-open');
            $(this).next('.icon-detail').stop(true, true).slideDown();
        }).on('mouseleave', function() {
            $(this).removeClass('is-open');
            $(this).next('.icon-detail').stop(true, true).slideUp();
        });
    } else {
        // Show all icon-detail and remove hover events for smaller screens
        $('.icon-detail').show();
        $('.icon-box').off('mouseenter mouseleave'); // Remove events
    }
}

// Run on load and resize
$(window).on('load resize', toggleIconDetail);

// Header bar on-scroll background color change effect
window.onscroll = function(){
    var header = document.getElementById('header');

    if(window.pageYOffset > 100){
        header.style.backgroundColor = "#373A40";
    }else{
        header.style.backgroundColor = "transparent";
    }
}

// slick Multiple Items start -----

$('.slider-holder').slick({
    dots: true,
    infinite: true,
    speed: 200, // moving time
    fade: true,
    cssEase: 'linear',
    // autoplay: true,

    responsive: [
        {
            breakpoint: 900,
            settings: {
                arrows: false,
                autoplay: true,
                autoplaySpeed: 10000
            }
        }
    ]
});

// slick Multiple Items end -----

document.querySelector('.close-btn2').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    const navbarCollapse = document.getElementById('navbarNavAltMarkup');
    const bootstrapCollapse = new bootstrap.Collapse(navbarCollapse); // Create a Bootstrap Collapse object
    bootstrapCollapse.hide(); // Close the menu
});
