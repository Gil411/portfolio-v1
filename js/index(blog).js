
// AOS - Animate On Scroll Library
AOS.init({
    once: true, // Apply to all
});

// slick Multiple Items start -----

$('.slider-holder').slick({
    dots: true,
    infinite: true,
    speed: 200, // moving time
    fade: true,
    cssEase: 'linear',
    autoplay: false,

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

$(document).ready(function(){
    // Run on load and resize
    $(window).on('load resize', function() {
        if (typeof toggleIconDetail === 'function') {
            toggleIconDetail();
        }
    });

    // Header bar on-scroll background color change effect
    $(window).on('scroll', function() {
        var header = document.getElementById('header');
        if (header) {
            if (window.pageYOffset > 100) {
                header.style.backgroundColor = "#373A40";
            } else {
                header.style.backgroundColor = "transparent";
            }
        }
    });
});
