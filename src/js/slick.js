$('.single-item').slick({
    dots: true,
    arrows: false,
    customPaging: function () {
        return '<div class="custom-slick-dot"></div>';
    },
});