const navbar = document.getElementById("navbar");
const navbarItem = document.getElementById("navbarItem");

navbar.addEventListener("click", () => {
     console.log("Clicked");
     navbarItem.classList.toggle("myclass");
});
