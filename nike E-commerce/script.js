// script.js

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});


function hideLoader() {
    $('#loading').hide();
  }
  
  $(window).ready(hideLoader);
  
  // Optional: Hide loader after 20 seconds, even if the page hasn't finished loading
  setTimeout(hideLoader, 20 * 1000);

  



 function loader(){
  document.querySelector('.loader-contaier').classList.add('fade-out');

 }
 function fadeout(){
  setInterval(loader,2000);
 }

 window.onload=fadeout;