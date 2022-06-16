const navbar = document.getElementById("navbar");
const navbarItem = document.getElementById("navbarItem");
const humburger = document.querySelector(".humburger");
const portfolioBtn = document.querySelector(".portfolioBtn");
const overley = document.querySelector("#overley");

const toggleMenu = () => {
     navbarItem.classList.toggle("myclass");
     humburger.classList.toggle("active");
     navbarItem.style.opacity = "1";
     overley.classList.add("overley");
};

navbar.addEventListener("click", toggleMenu);
portfolioBtn.addEventListener("click", toggleMenu);

overley.addEventListener(
     "click",
     function (event) {
          if (!event.target.closest(".navbarItem")) {
               closeModal();
          }
     },
     false
);

function closeModal() {
     overley.classList.remove("overley");
     navbarItem.classList.toggle("myclass");
     humburger.classList.toggle("active");
     navbarItem.style.opacity = "0";
}
