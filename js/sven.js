const button = document.querySelector("button");
const menuContainer = document.querySelector(".MenuContainer");

button.addEventListener("click", () => {
  menuContainer.classList.toggle("hide");
});
