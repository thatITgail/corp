const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const company = document.getElementById("company");
const message = document.getElementById("message");
const form = document.querySelector(".contact-form");
const navbar = document.querySelector(".nav-links");
const navToggle = document.querySelectorAll(".menu-toggle");
console.log(navToggle);
const toggleBtn = document.querySelector(".toggle-mode");

// Display navbar
navToggle.forEach((btn) => {
  btn.addEventListener("click", () => {
    navbar.classList.toggle("active")
  })
});

// Change theme
// toggleBtn.addEventListener("click", () => {
//   console.log(document.documentElement)
//   document.documentElement.classList.toggle("dark-theme");
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

// window.addEventListener("scroll", () => {
//   const icon = document.getElementById("chat-icon");
//   icon.style.display = (window.screenY > 1000) ? "block" : "none";  
//   // console.log(icon)
// })