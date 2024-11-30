//hamburger-menu
function toggleMenu() {
  document.querySelector('.navbar').classList.toggle('active');
  console.log('Menu clicked!');
}


//light-mode
function toggleLightMode() {
  document.body.classList.toggle('light-mode');
  document.querySelector('footer').classList.toggle('footer_light-mode');
  document.querySelector('.socialMedia').classList.toggle('socialMedia_light-mode');
}

//submission-message
let form = document.querySelector('.enquiry');

form.onsubmit = function (event) {
  event.preventDefault(); // prevent the page to be refreshed
  console.log('Submit Clicked!');

  const submitButton = document.querySelector('.submit');
  submitButton.classList.add('showMessage');

  //show for 3 seconds, then reset the form
  let countdown = 3;
  const interval = setInterval(() => {
    console.log(`Message will disappear in ${countdown} seconds`);
    countdown--;

    if (countdown < 0) {
      clearInterval(interval);
      submitButton.classList.remove('showMessage');
      form.reset();
      console.log('Message hidden and form reset.');
    }
  }, 1000);
};