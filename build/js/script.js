
jQuery(document).ready(function($) {
  $("#fullpage").fullpage({
   anchors:['page-1','page-2','page-3', 'page-4'],
   menu:'#menu',
});
});

$(document).ready(function(){
  $('.sl').slick({
  });
});


// $('#menu a').click(function(){
//   var element = $(this).attr('href');
//   var dist = $(element).offset().top;
//   $('html, body')
// })

// $(window).scroll(function(){
//   $('section[id]').each(function(){
//     var id = $(this).attr('id')
//     if($(this).offset().top-100<$(window).scrollTop()){
//       $('#menu a[href='#+id+']').toggleClass('toggle', 'open').siblings().toggleClass('open', 'toggle');
//     }
//   });
// });

var link = document.querySelector(".link-button");
var popup = document.querySelector("#modal");
// var close = popup.querySelector(".modal::after");
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});
