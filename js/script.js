// Toogle class active

const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove("active");
});

//Button hero section
const diskon = document.querySelector("#diskon");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove("active");
});
// for (var clickButton of
//   document.getElementsByClassName("clickTheButton"))
//   clickButton.addEventListener("click", alertMeessage);
//   function alertMeessage() {
//      alert("Untuk sekarang belum ada promo yaa...");
//   }