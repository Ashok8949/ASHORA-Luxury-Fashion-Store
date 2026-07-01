/* =====================================
        ASHORA - SCRIPT.JS
===================================== */

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0,0,0,0.96)";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.4)";
    } else {
        navbar.style.background = "rgba(15,15,15,.88)";
        navbar.style.boxShadow = "none";
    }
});

// Shop Now Button
const shopBtn = document.querySelector(".hero-left button");

if (shopBtn) {
    shopBtn.addEventListener("click", () => {

        document.querySelector(".products").scrollIntoView({
            behavior: "smooth"
        });

    });
}

// Add To Cart Buttons
const cartButtons = document.querySelectorAll(".product-card button");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.innerHTML = "✔ Added";

        button.style.background = "#28a745";
        button.style.color = "#fff";

        setTimeout(() => {

            button.innerHTML = "Add To Cart";

            button.style.background = "";
            button.style.color = "";

        }, 1500);

    });

});

// Newsletter
const form = document.querySelector(".newsletter form");

if (form) {

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const email = form.querySelector("input").value;

        if(email===""){

            alert("Please enter your email!");

        }

        else{

            alert("🎉 Thanks for subscribing to ASHORA!");

            form.reset();

        }

    });

}

// Product Hover Effect
const cards = document.querySelectorAll(".product-card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

// Smooth Fade Animation
const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

});

document.querySelectorAll(".feature-box,.category-card,.product-card,.sale-banner,.newsletter").forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(40px)";

    el.style.transition=".8s";

    observer.observe(el);

});

console.log("🔥 ASHORA Loaded Successfully");