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

// ---------------- Hero slider ------------
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");

let currentSlide = 0;
let slideTimer;

function showSlide(index) {
  if (index >= slides.length) index = 0;
  if (index < 0) index = slides.length - 1;

  slides.forEach((slide) => slide.classList.remove("opacity-100"));
  slides.forEach((slide) => slide.classList.add("opacity-0"));
  slides[index].classList.remove("opacity-0");
  slides[index].classList.add("opacity-100");
  
  
  dots.forEach((dot) => dot.classList.remove("active", "bg-white/50"));
  dots.forEach((dot) => dot.classList.add("bg-white/50"));
  dots[index].classList.add("active");
  dots[index].classList.remove("bg-white/50");

  currentSlide = index;
}

function autoSlide() {
  slideTimer = setInterval(() => {
    showSlide(currentSlide + 1);
  }, 4000);
}

function resetTimer() {
  clearInterval(slideTimer);
  autoSlide();
}

nextBtn.addEventListener("click", () => {
  showSlide(currentSlide + 1);
  resetTimer();
});

prevBtn.addEventListener("click", () => {
  showSlide(currentSlide - 1);
  resetTimer();
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showSlide(parseInt(dot.dataset.dot));
    resetTimer();
  });
});

autoSlide();

// ---------- Whish list --------------

document.querySelectorAll(".wishlist-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
    });
});

// --------------- news letter --------------
const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    newsletterForm.reset();
});