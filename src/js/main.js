import '../styles/global.scss'

let isMenuOpen = false;
const menuButton = document.getElementById("menu-btn");
const menu = document.getElementsByClassName("header__navigation");
const setMenuStatus = () => menu[0].style.display = isMenuOpen ? "flex" : "none";

setMenuStatus();

menuButton.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    setMenuStatus();
});


