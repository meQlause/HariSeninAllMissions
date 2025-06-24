const select = document.getElementById('country-code');
const flagImg = document.getElementById('flag');

select.addEventListener('change', function () {
  const selectedOption = select.options[select.selectedIndex];
  const flagUrl = selectedOption.getAttribute('data-flag');
  flagImg.src = flagUrl;
});


function togglePassword(cl, cl1) {
  const input = document.querySelector(`.password-wrapper input.${cl}`);
  const icon = document.getElementById(cl1);
  
  if (input.type === "password") {
    input.type = "text";
    icon.src = "assets/pictures/mdi_eye-on.png";
    icon.alt = "Hide password";
  } else {
    input.type = "password";
    icon.src = "assets/pictures/mdi_eye-off.png";
    icon.alt = "Show password";
  }
}
