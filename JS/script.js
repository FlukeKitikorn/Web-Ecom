const mobileNav = document.querySelector("#ham-menu");
const navbar = document.querySelector(".navbar-left");

const toggleNav = () => {
  navbar.classList.toggle("open");
  // mobileNav.classList.toggle("open");
};
mobileNav.addEventListener("click", () => toggleNav());

window.onload = function() {
  window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
      document.querySelector("nav").style.backgroundColor = "#EEEDEB";
      document.querySelector("nav").style.borderBottomRightRadius = "20px" ;
      document.querySelector("nav").style.borderBottomLeftRadius = "20px" ;
      // if (window.scrollY > 1){
      //   document.querySelector("nav").style.boxShadow = "2px 2px 4px rgba(0, 0, 0, 0.3)" ;
      // }
    }
     else {
      document.querySelector("nav").style.backgroundColor = "transparent";
    }
  });
};
