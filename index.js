const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const company = document.getElementById("company");
const message = document.getElementById("message");
const form = document.querySelector(".contact-form");
const navbar = document.querySelector(".nav-links");
const contact = document.getElementById("contact");
const navToggle = document.querySelectorAll(".menu-toggle");
const toggleBtn = document.querySelector(".toggle-mode");
// Display navbar
navToggle.forEach((btn) => {
  btn.addEventListener("click", () => {
    navbar.classList.toggle("active")
  })
});

// Link contact with tawk API
contact.addEventListener("click", (e) => {
  e.preventDefault();
  if (typeof Tawk_API !== undefined){
    Tawk_API.maximize();
  }
})

// Change theme
// toggleBtn.addEventListener("click", () => {
//   body.classList.toggle("dark-theme");
// })

// Validate form
function validForm() {
  let valid = true;

  function checkField(input, regex = null) {    
  // Find the error message inside the label container above the input
  const errorMsg = input.previousElementSibling?.querySelector(".error-msg");

  if (!input.value.trim() || (regex && !regex.test(input.value.trim()))) {
    input.classList.add("error");
    if (errorMsg) errorMsg.style.display = "block";
    valid = false;
  } else {
    input.classList.remove("error");
    if (errorMsg) errorMsg.style.display = "none";
  }
 }
  checkField(nameInput);
  checkField(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  checkField(message)
  checkField(company);
  return valid;
}

// submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validForm();
  if(validForm()){
    setInterval(() => {form.reset();}, 3000)
    console.log("Message sent successfully")
  }
});
