const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");

btnHamburger.addEventListener("click", function () {
  console.log("click hamburger");

  if (header.classList.contains("open overlay")) {
    header.classList.remove("open overlay");
  } else {
    header.classList.add("open overlay");
  }
});
