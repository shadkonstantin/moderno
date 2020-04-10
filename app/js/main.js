$(function () {

    var mixer = mixitup('.products__inner-box');
    $('.trending__inner').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false
    });

});