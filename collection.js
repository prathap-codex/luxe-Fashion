
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