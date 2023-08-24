
let navBar = document.querySelector(".nav-bar");
let hamburgerButton = document.querySelector(".nav-menu");

hamburgerButton.addEventListener("click", handleButtonClick);

function handleButtonClick (){
  console.log("handleButtonClick");
  hamburgerButton.classList.toggle("nav-menu--active");
  navBar.classList.toggle("nav-bar--visible");
  navBar.addEventListener("click", handleNavBarClick);
}

function handleNavBarClick (){
  console.log("handleNavBarClick");
  hamburgerButton.classList.remove("nav-menu--active");
  navBar.classList.remove("nav-bar--visible");
  document.removeEventListener("click", handleNavBarClick);
}

document.getElementById("year").innerHTML = new Date().getFullYear();