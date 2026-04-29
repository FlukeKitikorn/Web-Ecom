/* eslint-env browser */

const mobileNav = document.querySelector("#ham-menu");
const navbar = document.querySelector(".navbar-left");

const toggleNav = () => {
  navbar.classList.toggle("open");
  // mobileNav.classList.toggle("open");
};
mobileNav.addEventListener("click", () => toggleNav());

window.onload = function () {
  window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 0) {
      nav.style.backgroundColor = "#EEEDEB";
      nav.style.borderBottomRightRadius = "20px";
      nav.style.borderBottomLeftRadius = "20px";
    } else {
      nav.style.backgroundColor = "transparent";
    }
  });
};

const topBands = document.querySelector(".top-bands");

topBands.addEventListener("wheel", (e) => {
  e.preventDefault();
  const scrollStep = 300;
  if (e.deltaY < 0) {
    e.currentTarget.scrollBy({ left: -scrollStep, behavior: "smooth" });
  } else {
    e.currentTarget.scrollBy({ left: scrollStep, behavior: "smooth" });
  }
});

let isDown = false;
let startX = 0;
let scrollLeft = 0;

topBands.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - topBands.offsetLeft;
  scrollLeft = topBands.scrollLeft;
});
topBands.addEventListener("mouseleave", () => {
  isDown = false;
});
topBands.addEventListener("mouseup", () => {
  isDown = false;
});
topBands.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - topBands.offsetLeft;
  const walk = (x - startX) * 3;
  topBands.scrollLeft = scrollLeft - walk;
});

// length text area
/* exported countCharacters */
function countCharacters() {
  const message = document.getElementById("message").value;
  const count = message.length;
  const charCountElement = document.getElementById("charCount");
  charCountElement.textContent = `${count}/100`;
  if (count > 100) {
    charCountElement.style.color = "red";
  } else {
    charCountElement.style = "initial";
  }
}

// check phone
/* exported isValidPhone */
function isValidPhone(phone) {
  const regex = /^[0-9]+$/;
  return regex.test(phone);
}