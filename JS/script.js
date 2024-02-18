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
// length text area
function countCharacters() {
  var message = document.getElementById("message").value;
  var count = message.length;
  var charCountElement = document.getElementById("charCount");
  charCountElement.textContent = count + "/100";
  if (count > 100) {
      charCountElement.style.color = "red";
  } else {
      charCountElement.style = "initial";
  }
}

// check phone
function isValidPhone(phone) {
  // ตรวจสอบรูปแบบเบอร์โทรศัพท์ (ตัวเลขเท่านั้น)
  var regex = /^[0-9]+$/;
  return regex.test(phone);
}

//submit form
// function Submit() {
//   var name = document.getElementById('name');
//   var email = document.getElementById('mail');
//   var phone = document.getElementById('phone');
//   var message = document.getElementById('message');

//   else{
//     if (message.value.length > 100) {
//       alert("Message should not exceed 100 characters.");
//       message.style.color = "red"
//       return;
//     }
//     if (!isValidPhone(phone)) {
//       alert("Please enter a valid phone number.");
//       return;
//     }
//     alert("Message sent successfully!");
//   }
  

  // กรณีที่ไม่มีข้อความที่ต้องแจ้งเตือน
  // หรือเป็นไปตามการดำเนินการที่คุณต้องการ
  // จะไปทำงานต่อที่นี่
//}





// function Submit() {
//   let name = document.getElementById("name").value.trim();
//   let email = document.getElementById("email").value.trim();
//   let phone = document.getElementById("phone").value.trim();
//   let message = document.getElementById("message").value.trim();
//   if(name === "" || email === "" || phone === "" || message === ""){
//     console.log()
//     alert("Please fill in all fields");
//     return false;
//   }
//   else if (message.length > 100) {
//       alert("Message should not exceed 100 characters.");
//       return false;
//   }
//   ส่งข้อมูลหรือดำเนินการต่อตามต้องการ
//   alert("Message sent successfully!");
//   return true;
// }
