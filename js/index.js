const navbar = document.getElementById("navbar");
const navbarItem = document.getElementById("navbarItem");
const navBarIcon = document.getElementById("bars");
const navcross = document.getElementById("xmark");

navbar.addEventListener("click", () => {
     navbarItem.classList.toggle("myclass");
     // navbar.removeChild(navBarIcon);
     navbar.replaceChild(navcross, navBarIcon);
});
