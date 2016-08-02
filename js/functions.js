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
    $('.map1').customMap({
        locked: false,
        htmlMarkers: true,
        hideHtmlMarkers: false,
        lat: 46.830396,
        lng: -71.300340,
        zoom: 14,
        styles: [{ "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#46bcec" }, { "visibility": "on" }] }],
        classes: {
            mapInnerWrapper: 'wrapper',
        }
    });
});
