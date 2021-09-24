// =================== wow script ===================
new WOW().init();
// ==================================================
$(document).ready(function() {
    // ======================= Our Services =======================
    $('#services').owlCarousel({
            loop: true,
            center: false,
            // margin: 50,
            nav: true,
            dots: false,
            rtl: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })
        // ======================= headerSlider =======================
    $('#headerSlider').owlCarousel({
            loop: true,
            center: false,
            items: 1,
            margin: 0,
            nav: false,
            dots: false,
            // animateOut: 'fadeIn',
            animateIn: 'fadeIn',
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,

        })
        // ============================= projectSlider =======================

    $('#projectSlider').owlCarousel({
        loop: false,
        center: false,
        items: 1,
        margin: 0,
        nav: false,
        dots: true,
        // animateOut: 'fadeIn',
        animateIn: 'fadeIn',
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,

    })
});