const mobileNav = document.querySelector("#ham-menu");
const navbar = document.querySelector(".navbar-left");

const toggleNav = () => {
  navbar.classList.toggle("open");
};
mobileNav.addEventListener("click", () => toggleNav());

window.onload = function() {
  window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
      document.querySelector("nav").style.backgroundColor = "#EEEDEB";
      document.querySelector("nav").style.borderBottomRightRadius = "20px" ;
      document.querySelector("nav").style.borderBottomLeftRadius = "20px" ;
    }
     else {
      document.querySelector("nav").style.backgroundColor = "transparent";
    }
  });
};

let dropdownBtn = document.getElementById("drop-text");
let list = document.getElementById("list");
let icon = document.getElementById("iconn");
let span = document.getElementById("span");
let input = document.getElementById("search-input");
let listItems = document.querySelectorAll(".dropdown-list-item");

dropdownBtn.onclick = function(){
    if(list.classList.contains("show")){
        icon.style.rotate = "0deg";
    }else{
        icon.style.rotate = "-180deg";
    }
    list.classList.toggle("show");  
}; 

// close when click outside
window.onclick = function(e){
    if(e.target.id !== "drop-text" &&
       e.target.id !== "span" && 
       e.target.id !== "iconn"){
        list.classList.remove("show");
        icon.style.rotate = "0deg";
    }
};

for(item of listItems){
    item.onclick = function(e){
        span.innerText = e.target.innerText;

        if(e.target.innerText == "All"){
            input.placeholder = "Search Anything..."
        }

        input.placeholder = "Search in " + e.target.innerText + "...";
    };
}


const product = [
    {
        id: 0,
        image: './img/sale1.jpg',
        title: 'Adidas',
        des: 'Hawaiian T-shirt',
        price: 300,
    },
    {
        id: 1,
        image: './img/sale2.jpg',
        title: 'Nike',
        des: 'overcoat',
        price: 490,
    },
    {
        id: 2,
        image: './img/sale3.jpg',
        title: 'Champion',
        des: 'T-shirt',
        price: 370,
    },
    {
        id: 3,
        image: './img/sale4.jpg',
        title: 'Lacoste',
        des: 'T-shirt lmited edition',
        price: 370,
    },
    {
        id: 4,
        image: './img/shirt.jpg',
        title: 'The north face',
        des: 'Shirt Hip-Hop',
        price: 470,
    },
    {
        id: 5,
        image: './img/nb_cap.webp',
        title: 'New balance',
        des: 'Cap',
        price: 999,
    },
    {
        id: 6,
        image: './img/n1.jpg',
        title: 'Dior',
        des: 'T-shirt',
        price: 1700,
    },
    {
        id: 7,
        image: './img/vans_sock.webp',
        title: 'Vans',
        des: 'Sock',
        price: 340,
    },
    {
        id: 8,
        image: './img/addidas.webp',
        title: 'Addidas',
        des: 'Slipper',
        price: 1040,
    },
    {
        id: 9,
        image: './img/lacoste.webp',
        title: 'Lacoste',
        des: 'Sneakers',
        price: 2040,
    },
    {
        id: 10,
        image: './img/nb.webp',
        title: 'New balance',
        des: 'Sneakers',
        price: 2340,
    },
    {
        id: 11,
        image: './img/vans.webp',
        title: 'Vans',
        des: 'Slip-on',
        price: 2340,
    },
    {
        id: 12,
        image: './img/Nike.webp',
        title: 'Nike',
        des: 'Sneakers',
        price: 2900,
    },
    {
        id: 13,
        image: './img/puma.webp',
        title: 'Puma',
        des: 'bag',
        price: 3120,
    },
    {
        id: 14,
        image: './img/ที่ติดรองเท้า2.webp',
        title: 'Crocs',
        des: 'Slipper',
        price: 1040,
    },
];

const categories = [...new Set(product.map((item) => { return item }))]

document.getElementById('search-box').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
});

const displayItem = (items) => {
    document.getElementById('container-content').innerHTML = items.map((item) => {
        var { image, title, des, price } = item;
        return (
            `<div class="content">
            <img src=${image} >
            <div class="des">
              <span>${title}</span>
              <h5>${des}</h5>    
              <h4 class="old">฿ ${price}.00</h4>
            </div>
            <a href="#"><i class="fa-solid fa-cart-arrow-down" id="cart"></i></a>
          </div>`
        )
    }).join('')
};
displayItem(categories);