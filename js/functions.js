$(document).ready(function() {
    $('.slider').slider({
        noCss: false,
        displayedSlides: 1,
        slidesGutter: 0,
        createArrowsNavigation: true,
        createPagesNavigation: true,
        createActiveContentNavigation: false,
        displayPageNumber: true,
        displayFirstActiveContent: false,
        swipe: true,
        autoplay: true,
        autoplayDelay: 3000,
        infiniteLoop: true,
        animationSpeed: 300,
    });
    console.log('ready');
});
