var img = document.querySelector(".gourdeD2");
var click = 0;

if (img) {
  img.addEventListener("click", function() {
    img.className = "imggrande";
    click = click + 1;
    if (click % 2 == 0) {
      img.className = "gourdeD2";
    }
  });
}

let menu = document.querySelector(".menu");
let nav = document.querySelector(".overlay");

menu.addEventListener("click", function() {
  menu.classList.toggle("active");
  nav.classList.toggle("menu-open");
});
