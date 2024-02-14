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

document.querySelector('.top-bands').addEventListener('wheel', (e) => {
  e.preventDefault();
  const scrollStep = 300; // ค่าเลื่อนแต่ละครั้ง
  if (e.deltaY < 0) {
    e.currentTarget.scrollBy({ left: -scrollStep, behavior: 'smooth' });
  } else {
    e.currentTarget.scrollBy({ left: scrollStep, behavior: 'smooth' });
  }
});

document.querySelector('.top-bands').addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - document.querySelector('.top-bands').offsetLeft;
  scrollLeft = document.querySelector('.top-bands').scrollLeft;
});
document.querySelector('.top-bands').addEventListener('mouseleave', () => {
  isDown = false;
});
document.querySelector('.top-bands').addEventListener('mouseup', () => {
  isDown = false;
});
document.querySelector('.top-bands').addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - document.querySelector('.top-bands').offsetLeft;
  const walk = (x - startX) * 3; // เพิ่มความเร็วในการลาก
  document.querySelector('.top-bands').scrollLeft = scrollLeft - walk;
});
