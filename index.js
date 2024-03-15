const loginTab = document.getElementById("login-tab");
const signupTab = document.getElementById("signup-tab");
const formTitle = document.getElementById("form-title");
const nameField = document.getElementById("name-field");
const confirmPasswordField = document.getElementById("confirm-password-field");
const submitButton = document.getElementById("submit-btn");
const toggleLink = document.getElementById("toggle-form");
console.log(loginTab,"loginTab")
function showLoginForm() {
  console.log("hello")
  formTitle.textContent = "Login Form";
  nameField.style.display = "none";
  confirmPasswordField.style.display = "none";
  submitButton.textContent = "Login";
  toggleLink.textContent = "Signup";
  toggleLink.removeEventListener("click", showLoginForm);
  toggleLink.addEventListener("click", showSignupForm);
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
}

function showSignupForm() {
  formTitle.textContent = "Signup Form";
  nameField.style.display = "block";
  confirmPasswordField.style.display = "block";
  submitButton.textContent = "Signup";
  toggleLink.textContent = "Login";
  toggleLink.removeEventListener("click", showSignupForm);
  toggleLink.addEventListener("click", showLoginForm);
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
}

loginTab.addEventListener("click", showLoginForm);
signupTab.addEventListener("click", showSignupForm);

signupTab.classList.add("active");