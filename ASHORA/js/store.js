// ==============================
// ASHORA STORE
// ==============================

const buttons = document.querySelectorAll(".product-card button");

buttons.forEach((button, index) => {

    button.addEventListener("click", () => {

        const card = button.parentElement;

        const product = {

            id: index,

            name: card.querySelector("h3").innerText,

            price: card.querySelector("h4").innerText,

            image: card.querySelector("img").getAttribute("src"),

            quantity: 1

        };

        let cart = JSON.parse(localStorage.getItem("ashoraCart")) || [];

        let exist = cart.find(item => item.id === product.id);

        if (exist) {

            exist.quantity++;

        } else {

            cart.push(product);

        }

        localStorage.setItem("ashoraCart", JSON.stringify(cart));

        button.innerHTML = "✔ Added";
        let toast = document.getElementById("toast");

if(toast){

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},2000);

}

        button.style.background = "#28a745";
        button.style.color = "white";

        setTimeout(() => {

            button.innerHTML = "Add To Cart";
            button.style.background = "";
            button.style.color = "";

        },1500);

    });

});
//=============================
// LIVE SEARCH
//=============================

const searchBox = document.getElementById("searchBox");

if(searchBox){

searchBox.addEventListener("keyup",()=>{

let value = searchBox.value.toLowerCase();

let cards = document.querySelectorAll(".product-card");

cards.forEach(card=>{

let name = card.querySelector("h3").innerText.toLowerCase();

if(name.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}
//=============================
// WISHLIST
//=============================

const hearts=document.querySelectorAll(".wishlist");

hearts.forEach(heart=>{

heart.onclick=()=>{

heart.classList.toggle("active");

if(heart.classList.contains("active")){

heart.className="fa-solid fa-heart wishlist active";

}else{

heart.className="fa-regular fa-heart wishlist";

}

}

});
//==============================
// CART COUNTER
//==============================

function updateCounter(){

let cart=JSON.parse(localStorage.getItem("ashoraCart"))||[];

let count=0;

cart.forEach(item=>{

count+=item.quantity;

});

let badge=document.getElementById("cartCount");

if(badge){

badge.innerHTML=count;

}

}

updateCounter();


//==============================
// DARK MODE
//==============================

const theme=document.getElementById("themeBtn");

if(theme){

theme.onclick=()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

theme.innerHTML="☀️";

}else{

theme.innerHTML="🌙";

}

}

}
//============================
// LOADER
//============================

window.addEventListener("load",()=>{

let loader=document.getElementById("loader");

if(loader){

setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";

},1200);

}

});
//============================
// SCROLL BAR
//============================

window.addEventListener("scroll",()=>{

let scrollTop=document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let percentage=(scrollTop/height)*100;

let bar=document.getElementById("progressBar");

if(bar){

bar.style.width=percentage+"%";

}

});

//==============================
// SCROLL TO TOP
//==============================

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll",()=>{

if(scrollBtn){

if(window.scrollY > 300){

scrollBtn.style.display="block";

}else{

scrollBtn.style.display="none";

}

}

});

if(scrollBtn){

scrollBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}

//==============================
// MOBILE MENU
//==============================

const menu=document.querySelector(".menu-toggle");

const nav=document.querySelector(".nav-links");

if(menu){

menu.onclick=()=>{

nav.classList.toggle("active");

};

}
//========================
// HERO FADE
//========================

const hero=document.querySelector(".hero");

if(hero){

hero.style.opacity="0";
hero.style.transform="translateY(50px)";

window.addEventListener("load",()=>{

setTimeout(()=>{

hero.style.transition="1s";

hero.style.opacity="1";

hero.style.transform="translateY(0)";

},400);

});

}

//==============================
// QUICK VIEW
//==============================

const popup = document.getElementById("quickView");
const popupImg = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupPrice = document.getElementById("popupPrice");
const popupDesc = document.getElementById("popupDesc");
const popupRating = document.getElementById("popupRating");
const closeBtn = document.getElementById("closeQuick");

if (popup && popupImg && popupTitle && popupPrice) {

    const productImages = document.querySelectorAll(".quick-open");

    productImages.forEach(img => {

        img.addEventListener("click", () => {

            const card = img.closest(".product-card");

            popup.style.display = "flex";

            popupImg.src = img.src;

            popupTitle.innerText = card.querySelector("h3").innerText;

            popupPrice.innerText = card.querySelector("h4").innerText;

            popupDesc.innerText = desc;

            popupRating.innerHTML = rating;

            let desc = "";
            let rating = "";
switch (popupTitle.innerText) {

    case "Nike Air Max":
        rating = "⭐⭐⭐⭐☆";
        desc = "Premium running sneakers with Air Cushion technology. Lightweight, breathable and crafted for luxury everyday comfort.";
        break;

    case "Premium Hoodie":
        rating = "⭐⭐⭐⭐☆";
        desc = "Soft cotton premium hoodie with oversized fit and luxury streetwear styling.";
        break;

    case "Luxury Watch":
        rating = "⭐⭐⭐⭐⭐";
        desc = "Elegant stainless steel luxury watch with sapphire glass and water resistant design.";
        break;

    case "Leather Jacket":
        rating = "⭐⭐⭐⭐☆";
        desc = "Premium genuine leather jacket with modern fit and timeless luxury finish.";
        break;

    case "Men's Bracelet":
        rating = "⭐⭐⭐⭐☆";
        desc = "Black leather bracelet with gold stainless steel clasp for a premium look.";
        break;

    case "Classic Backpack":
        rating = "⭐⭐⭐⭐⭐";
        desc = "Luxury waterproof backpack with laptop compartment and premium finish.";
        break;

    case "Premium Sunglasses":
        rating = "⭐⭐⭐⭐⭐";
        desc = "UV400 polarized sunglasses with luxury metal frame.";
        break;

    case "Premium Cap":
        rating = "⭐⭐⭐⭐";
        desc = "Premium embroidered baseball cap made from high-quality cotton.";
        break;

    default:
        rating = "⭐⭐⭐⭐";
        desc = "Premium luxury fashion product.";
}

        });

    });

    closeBtn.addEventListener("click", () => {

        popup.style.display = "none";

    });

    popup.addEventListener("click", (e) => {

        if (e.target === popup) {

            popup.style.display = "none";

        }

    });

}