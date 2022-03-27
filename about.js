const navbar = document.querySelector(".right");
const menu = document.querySelector(".hamburger");

menu.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menu.children[0].classList.toggle("toggle1");
  menu.children[1].classList.toggle("toggle2");
  menu.children[2].classList.toggle("toggle3");
});
