let cartCount = 0;

const buttons = document.querySelectorAll(".product-card button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        document.getElementById("cart-count").innerText = cartCount;

        alert("Product added to cart!");

    });

});

/* Search Function */

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    let filter = searchInput.value.toLowerCase();

    let cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {

        let productName = card.querySelector("h3").innerText.toLowerCase();

        if(productName.includes(filter)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

});

/* Dark Mode */

const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
/* Category Filter */

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category = button.dataset.category;

        const cards = document.querySelectorAll(".product-card");

        cards.forEach(card => {

            if(category === "all" || card.dataset.category === category){
                card.style.display = "block";
            }else{
                card.style.display = "none";
            }

        });

    });

});
/* Back To Top Button */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 200){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
/* Login Popup */

const loginBtn = document.getElementById("loginBtn");

const loginPopup = document.getElementById("loginPopup");

const closeBtn = document.getElementById("closeBtn");

/* Open Popup */

loginBtn.addEventListener("click", () => {

    loginPopup.style.display = "flex";

});

/* Close Popup */

closeBtn.addEventListener("click", () => {

    loginPopup.style.display = "none";

});

/* Login Success */

const submitLogin = document.getElementById("submitLogin");

submitLogin.addEventListener("click", () => {

    alert("Login Successful!");

    loginPopup.style.display = "none";

});