document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript file loaded and ready");
  
    document.querySelector('.menu-toggle').addEventListener('click', function() {
      console.log('Button clicked!');
      document.querySelector('.navbar').classList.toggle('active');
    });
});

function toggleLightMode() {
    document.body.classList.toggle('light-mode');
}  