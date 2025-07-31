document.addEventListener('DOMContentLoaded', () => {
  const countryCodeSelect = document.getElementById('country-code');
  const flagImg = document.getElementById('flag');

  if (countryCodeSelect && flagImg) {
    countryCodeSelect.addEventListener('change', function () {
      const selectedOption = countryCodeSelect.options[countryCodeSelect.selectedIndex];
      const flagUrl = selectedOption.getAttribute('data-flag');
      if (flagUrl) {
        flagImg.src = flagUrl;
      }
    });
  }

  const togglePasswordButtons = document.querySelectorAll('.toggle-password');

  togglePasswordButtons.forEach(button => {
    button.addEventListener('click', () => {
      const passwordInput = button.previousElementSibling;
      const icon = button.querySelector('img');

      if (passwordInput && passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.src = 'assets/pictures/mdi_eye-on.png';
        icon.alt = 'Hide password';
      } else if (passwordInput) {
        passwordInput.type = 'password';
        icon.src = 'assets/pictures/mdi_eye-off.png';
        icon.alt = 'Show password';
      }
    });
  });
});

const slider = document.querySelector('.video-categories');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('dragging');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('dragging');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('dragging');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.5;
  slider.scrollLeft = scrollLeft - walk;
});

let touchStartX = 0;
let touchScrollLeft = 0;
slider.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].pageX;
  touchScrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchmove', (e) => {
  const x = e.touches[0].pageX;
  const walk = (x - touchStartX) * 1.5;
  slider.scrollLeft = touchScrollLeft - walk;
});

const categories = document.querySelectorAll('.category');

categories.forEach(category => {
  category.addEventListener('click', () => {
    categories.forEach(cat => cat.classList.remove('active'));
    category.classList.add('active');
  });
});