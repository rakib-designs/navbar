const navbar = document.getElementById("navbar");
const navbarItem = document.getElementById("navbarItem");
const humburger = document.querySelector(".humburger");
const portfolioBtn = document.querySelector(".portfolioBtn");

const toggleMenu = () => {
     navbarItem.classList.toggle("myclass");
     humburger.classList.toggle("active");
};

navbar.addEventListener("click", toggleMenu);

portfolioBtn.addEventListener("click", toggleMenu);
