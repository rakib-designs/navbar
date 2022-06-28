const navbar = document.getElementById("navbar");
const navbarItem = document.getElementById("navbarItem");
const humburger = document.querySelector(".humburger");
const portfolioBtn = document.querySelector(".portfolioBtn");
const overley = document.querySelector("#overley");

// Selecting for Question and Answer

const Question = document.querySelectorAll("#answer");
const getAnswer = document.querySelectorAll("#getAnswer");
const faIcon = document.querySelectorAll(".fa-caret-down");

Question.forEach((question, index) => {
     question.addEventListener("click", () => {
          getAnswer[index].classList.toggle("visibleAnswer");
          faIcon[index].classList.toggle("getRotate");
     });
});

const toggleMenu = () => {
     navbarItem.classList.toggle("myNavbar");
     humburger.classList.toggle("active");
     navbarItem.style.opacity = "1";
     overley.classList.toggle("overley");
};

navbar.addEventListener("click", toggleMenu);
portfolioBtn.addEventListener("click", toggleMenu);
