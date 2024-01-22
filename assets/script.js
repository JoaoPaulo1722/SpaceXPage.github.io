document.addEventListener("DOMContentLoaded", function () {
  var containerMenu = document.querySelector("#list-desktop-container ul");
  var closeMenu = document.querySelector(".close-menu");
  var openMenu = document.querySelector(".menu_logo");

  function toggleMenu() {
    containerMenu.classList.toggle("openMenu");
  }

  openMenu.addEventListener("click", toggleMenu);
  closeMenu.addEventListener("click", toggleMenu);
});
