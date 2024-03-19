//hidden block & hidden button

const hiddenButton = document.querySelector('.hidden-button');
const hiddenBlock = document.querySelector('.hidden-block');

hiddenButton.addEventListener('click', function(){
    this.classList.toggle('hidden-button--active');
    hiddenBlock.classList.toggle('hidden-block--active');
});

//hidden appointment & button

const appointmentButton = document.querySelectorAll('.appointment-button');
const appointmentForm = document.querySelector('.hidden-appointment');
const appointmentFormCross = document.querySelector('.hidden-appointment__cross');

appointmentButton.forEach(function(item){
    item.addEventListener('click', function(){
        appointmentForm.classList.add('hidden-appointment--active');
    });
});

appointmentFormCross.addEventListener('click', function(){
    appointmentForm.classList.remove('hidden-appointment--active');
});

//preview slider

const swiper = new Swiper('.preview__slider', {
    direction: 'horizontal',
    loop: true,
    speed: 3000,
    autoplay: {
        delay: 2000,
    }
});    

// Service

const serviceButton = document.querySelectorAll('.service__button');
const popup = document.querySelector('.popup');
const popupCross = document.querySelector('.popup__middle img');

serviceButton.forEach(function(item){
    item.addEventListener('click', function(){
        popup.classList.add('popup--active');
    });
});

popupCross.addEventListener('click', function(){
    popup.classList.remove('popup--active');
});




//reviews slider

const swiper2 = new Swiper('.reviews__slider', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 2,
}); 