function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  // targeting the menu-links and hamburger-icon classes, whenever it is clicked (onCLick) it will add or remove (toggle) the "open" class
}
