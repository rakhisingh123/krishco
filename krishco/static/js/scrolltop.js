// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function legend(l, t) {
  a = $(t).val();
  if (a.trim() == '')
      $(l).css('visibility', 'hidden')
  else
      $(l).css('visibility', 'visible')
}
$('.content2').click(function () {
  $('.popup1').css('display', 'flex');
})
$(document).ready(function () {
  var a = 0;
  $('.fa-bars').click(function () {
      if (a == 0) {
          $('.nav').css({ 'right': '0rem', 'transition': '.3s all linear' })
          a = 1;
      }
      else if (a == 1) {
          $('.nav').css({ 'right': '-21rem', 'transition': '.3s all linear' })
          a = 0;
      }
})
});