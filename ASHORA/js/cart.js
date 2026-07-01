// ===============================
// ASHORA REAL CART
// ===============================

const cartBody = document.getElementById("cart-body");
const subtotal = document.getElementById("subtotal");
const gst = document.getElementById("gst");
const grandTotal = document.getElementById("grand-total");

let cart = JSON.parse(localStorage.getItem("ashoraCart")) || [];

function renderCart() {

    if (!cartBody) return;

    cartBody.innerHTML = "";

    if (cart.length === 0) {

        cartBody.innerHTML = `
        <tr>
            <td colspan="5">
                <h2>Your Cart is Empty 😔</h2>
            </td>
        </tr>`;

        subtotal.innerHTML = "₹0";
        gst.innerHTML = "₹0";
        grandTotal.innerHTML = "₹0";

        return;
    }

    let sub = 0;

    cart.forEach((item, index) => {

        let price = Number(item.price.replace(/[^\d]/g, ""));

        let total = price * item.quantity;

        sub += total;

        cartBody.innerHTML += `

<tr>

<td>

<div class="cart-product">

<img src="${item.image}">

<span>${item.name}</span>

</div>

</td>

<td>₹${price}</td>

<td>

<div class="qty-box">

<button onclick="decrease(${index})">-</button>

<input value="${item.quantity}" readonly>

<button onclick="increase(${index})">+</button>

</div>

</td>

<td>₹${total}</td>

<td>

<button class="delete-btn" onclick="removeItem(${index})">

<i class="fa-solid fa-trash"></i>

</button>

</td>

</tr>

`;

    });

    let tax = Math.round(sub * 0.18);

    subtotal.innerHTML = "₹" + sub;
    gst.innerHTML = "₹" + tax;
    grandTotal.innerHTML = "₹" + (sub + tax);

}

function increase(index){

    cart[index].quantity++;

    saveCart();

}

function decrease(index){

    if(cart[index].quantity>1){

        cart[index].quantity--;

    }

    saveCart();

}

function removeItem(index){

    cart.splice(index,1);

    saveCart();

}

function saveCart(){

    localStorage.setItem("ashoraCart",JSON.stringify(cart));

    renderCart();

}

renderCart();

const checkout=document.querySelector(".checkout-btn");

if(checkout){

checkout.onclick=()=>{

alert("🎉 Thank You For Shopping With ASHORA!");

localStorage.removeItem("ashoraCart");

location.reload();

}

}