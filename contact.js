// ----------- top annoncement bar close ----------------
const topBar = document.getElementById("topBar");
const closeTopBar = document.getElementById("closeTopBar");

closeTopBar.addEventListener("click", () => {
    topBar.classList.add("hidden");
});

// ------------- Mobile menu ----------------
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () =>{
    mobileMenu.classList.toggle("hidden");
});

mobileMenu.querySelectorAll("a").forEach((item) => {
    item.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
    });
});

// ------------ contact form ---------------
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMsg = document.getElementById("successMsg");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  if (nameInput.value.trim() === "") {
    nameError.classList.remove("hidden");
    isValid = false;
  } else {
    nameError.classList.add("hidden");
  }

  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.classList.remove("hidden");
    isValid = false;
  } else {
    emailError.classList.add("hidden");
  }

  if (messageInput.value.trim() === "") {
    messageError.classList.remove("hidden");
    isValid = false;
  } else {
    messageError.classList.add("hidden");
  }

  if (isValid) {
    successMsg.classList.remove("hidden");
    contactForm.reset();

    setTimeout(() => {
      successMsg.classList.add("hidden");
    }, 4000);
  } else {
    successMsg.classList.add("hidden");
  }
});
