$(document).ready(function() {
    $('.nav-main').menu();

    $('.slider').slider({
        noCss: false,
        displayedSlides: 1,
        slidesGutter: 10,
        createArrowsNavigation: true,
        createPagesNavigation: true,
        createActiveContentNavigation: false,
        displayPageNumber: true,
        displayFirstActiveContent: false,
        swipe: true,
        autoplay: true,
        autoplayDelay: 8000,
        infiniteLoop: true,
        animationSpeed: 300,
    });

    $('.map1').customMap({
        locked: true,
        markersSelector: '.marker',
        htmlMarkers: true,
        hideHtmlMarkers: false,
        lat: 46.830396,
        lng: -71.300340,
        zoom: 12,
        styles: [{ "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#46bcec" }, { "visibility": "on" }] }],
        classes: {
            mapInnerWrapper: 'wrapper',
        }
    });
});

$(document).on('click', 'a', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});
