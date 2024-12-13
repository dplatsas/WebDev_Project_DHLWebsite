//hamburger-menu
function toggleMenu() {
  document.querySelector('.navbar').classList.toggle('active');
  console.log('Menu clicked!');
}


//light-mode
// Toggle light mode on button click
document.getElementById('theme-toggle').addEventListener('click', () => {
  const isLightMode = document.body.classList.toggle('light-mode');
  const footer = document.querySelector('footer');
  const socialMedia = document.querySelector('.socialMedia');

  // Toggle additional classes based on mode
  if (footer) {
    footer.classList.toggle('footer_light-mode', isLightMode);
  }
  if (socialMedia) {
    socialMedia.classList.toggle('socialMedia_light-mode', isLightMode);
  }

  // Save the mode to localStorage based on the current state
  if (isLightMode) {
    localStorage.setItem('lightMode', 'enabled'); // Store mode as 'enabled'
  } else {
    localStorage.removeItem('lightMode'); // Remove mode to disable it
  }
});

// Load the saved theme mode when the page loads
window.addEventListener('load', () => {
  const savedMode = localStorage.getItem('lightMode');
  if (savedMode === 'enabled') {
    document.body.classList.add('light-mode');
    document.querySelector('footer').classList.add('footer_light-mode');
    document.querySelector('.socialMedia').classList.add('socialMedia_light-mode');
  }
});



//validation + submission message
function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const email = document.getElementById('email').value;

  // check if success
  if (emailIsValid(email)) {
    console.log("successfully submitted");

    // display message
    const submitButton = document.querySelector('.submit');
    submitButton.classList.add('showMessage');

    //show message for 3 seconds, then reset the form
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

  }  else {
      alert('Please enter a valid email address.');
      return;
  }
});