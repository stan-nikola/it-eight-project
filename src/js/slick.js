$('.single-item').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    customPaging: function () {
        return '<div class="custom-slick-dot"></div>';
    },
});