// $(".theTarget").skippr({
//   transition: 'fade',
//   speed: 1000,
//   easing: 'easeOutQuart',
//   nvType: 'block',
//   chidrenElementType: 'div',
//   arrows: true,
//   autoPlay: false,
//   autoPlayDuration: 5000,
//   keyboardOnAlways: true,
//   heidePrevious: false
// });

$(function(){
  $('#back a').on('click',function(event){
    $('body,html').animate({
      scrollTop:0
    },800);
    event.preventDefault();
  })
})