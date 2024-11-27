document.addEventListener("DOMContentLoaded", function() {
  console.log("JavaScript file loaded and ready");

  document.querySelector('.menu-toggle').addEventListener('click', function() {
      console.log('Button clicked!');
      document.querySelector('.navbar').classList.toggle('active');
  });
});

function toggleLightMode() {
  document.body.classList.toggle('light-mode');
  document.querySelector('footer').classList.toggle('footer_light-mode');
  document.querySelector('.socialMedia').classList.toggle('socialMedia_light-mode');
}