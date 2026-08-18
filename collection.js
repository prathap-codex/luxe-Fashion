
// ------------- Mobile menu ----------------
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

mobileMenu.querySelectorAll("a").forEach((item) => {
    item.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
    });
});

// -------------- search functionality ------------------
const search = document.getElementById("searchInput");
const productGrid = document.getElementById("productGrid");
const products = productGrid.querySelectorAll(".product-card");

search.addEventListener("keyup", () => {
    const enteredText = search.value.toUpperCase();

    for (i = 0; i < products.length; i = i + 1) {
        const productName = products[i].querySelector("p").textContent;

        if (productName.toUpperCase().indexOf(enteredText) > -1) {
            products[i].style.display = "block";
        }

        else {
            products[i].style.display = "none";
        }
    }
});

// -------------- filter functionality ------------------

const occasionBoxes = document.querySelectorAll(".filter-occasion");
const colorBoxes = document.querySelectorAll(".filter-color");
const arrivalBoxes = document.querySelectorAll(".filter-arrival");
const clearBtn = document.getElementById("clearFilters");

function runFilter() {

    for (var i = 0; i < products.length; i = i + 1) {
        var occasionBox = document.querySelector(".filter-occasion:checked");
        var colorBox = document.querySelector(".filter-color:checked");
        var arrivalBox = document.querySelector(".filter-arrival:checked");

        var occasion = products[i].getAttribute("data-occasion");
        var color = products[i].getAttribute("data-color");
        var arrival = products[i].getAttribute("data-arrival");

        const occasionOk = !occasionBox || occasionBox.value === occasion;
        const colorOk = !colorBox || colorBox.value === color;
        const arrivalOk = !arrivalBox || arrivalBox.value === arrival;

        if (occasionOk && colorOk && arrivalOk) {
            products[i].style.display = "block";
        }
        else {
            products[i].style.display = "none";
        }
    }

}

occasionBoxes.forEach((box) => box.addEventListener("change", runFilter));
colorBoxes.forEach((box) => box.addEventListener("change", runFilter));
arrivalBoxes.forEach((box) => box.addEventListener("change", runFilter));
 
// ----- Clear button ---------
clearBtn.addEventListener("click", () => {
    occasionBoxes.forEach((box) => (box.checked = false));
    colorBoxes.forEach((box) => (box.checked = false));
    arrivalBoxes.forEach((box) => (box.checked = false));
    search.value = "";
    runFilter();
});
