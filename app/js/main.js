function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

for (let elm of elements) {
  observer.observe(elm);
}
$(window).on('load', function(e){
    $('.sum').text(`${$('#sum_slider').val()}₽`)
    $('.age').text(`${$('#age_slider').val()} месяцев`)
})
$('#sum_slider').on('change', function(e){
    let sum = $('#sum_slider').val()
    let age = $('#age_slider').val()
    let result = Math.floor(sum/age, 2)
    $('.result').text(`${result} ₽`)
})
$('#age_slider').on('change', function(e){
    let sum = $('#sum_slider').val()
    let age = $('#age_slider').val()
    let result = Math.floor(sum/age, 2)
    $('.result').text(`${result} ₽`)
})
$('#age_slider').on('change', function(e){
    let age = $(this).val()
    $('.age').text(`${age} месяцев`)
})
$('#sum_slider').on('change', function(e){
    let sum = $(this).val()
    $('.sum').text(`${sum} ₽`)
})
$('.burger').on('click', function(e){
  $('.header').toggleClass('active')
  $(this).toggleClass('active')
})
$('.work__body-item').on('click', function(e){
  $(this).children('.work__body-item-modal').addClass('active')
})
$('.work__body-item-modal-body-close').on('click', function(e){
  setTimeout(() => {
    $('.work__body-item-modal').removeClass('active')
    
  }, 100);
})
var splide = new Splide("#rev", {
  pagination: false,
});

splide.mount();
var splide = new Splide("#part", {
  pagination: false,
});

splide.mount();
