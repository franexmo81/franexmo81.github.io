let navBar = document.querySelector(".nav-bar");
let hamburgerButton = document.querySelector(".nav-menu");

hamburgerButton.addEventListener("click", handleButtonClick);

function handleButtonClick() {
  console.log("handleButtonClick");
  hamburgerButton.classList.toggle("nav-menu--active");
  navBar.classList.toggle("nav-bar--visible");
  navBar.addEventListener("click", handleNavBarClick);
}

function handleNavBarClick() {
  console.log("handleNavBarClick");
  hamburgerButton.classList.remove("nav-menu--active");
  navBar.classList.remove("nav-bar--visible");
  document.removeEventListener("click", handleNavBarClick);
}

document.getElementById("year").innerHTML = new Date().getFullYear();

let contactForm = document.querySelector("#contact-form");
let contactName = document.querySelector("#contact-name");
let contactEmail = document.querySelector("#contact-email");
let contactMessage = document.querySelector("#contact-message");
let contactBtn = document.querySelector("#contact-btn");

contactBtn.addEventListener("click", formProcessing);

function formProcessing(e) {
  if (isFormContentValid()) {
    contactForm.submit();
    contactForm.reset();
  } else {
    window.alert(
      "The form is not complete.\nPlease, make sure you fill all the fields before submitting."
    );
  }
}

function isFormContentValid() {
  if (!contactName.checkValidity()) {
    return false;
  }

  if (!contactEmail.checkValidity()) {
    return false;
  }

  if (!contactMessage.checkValidity()) {
    return false;
  }

  return true;
}

// function collectData() {
//   let contactData = [
//     contactName.value,
//     contactEmail.value,
//     contactMessage.value,
//   ];
//   console.log(contactData);
//   return contactData;
// }

// function clearData() {
//   contactName.value = "";
//   contactEmail.value = "";
//   contactMessage.value = "";
// }
