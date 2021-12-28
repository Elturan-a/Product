
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let button = $('.btn');
let overlay = $('.overlay');
let close = $('.popup__close');



button.on('click', function () {
    overlay.fadeIn('slow');
});

close.on('click', function () {
    overlay.fadeOut('slow');
});

let button1 = $('.second');
let overlayin = $('.overlayin');
let close1 = $('.popupsecond__close');



button1.on('click', function () {
    overlayin.fadeIn('slow');
});

close1.on('click', function () {
    overlayin.fadeOut('slow');
});



let button2 = $('.third');
let order = $('.order');
let close2 = $('.popupthird__close');
let second = $('.popupthird__second');
let form = $('.popupthird__form');
let payment = $('.popupthird__payment')



button2.on('click', function () {
    order.fadeIn('slow');
    form.fadeIn('slow');
});

close2.on('click', function () {
    order.fadeOut('slow');
    form.fadeOut('slow');
    payment.fadeOut('slow');
});

second.on('click', function (e) {
    e.preventDefault();
    order.fadeOut('slow');
    form.fadeOut('slow');
    order.fadeIn('slow');
    payment.fadeIn('slow');
});


let burger = $('.burger');
let nav = $('.header__navbar');


burger.on('click', function () {
    nav.toggleClass('active');
    burger.toggleClass('active');
});
