// app.js

// Product management
const products = [];

function addProduct(product) {
    products.push(product);
}

function removeProduct(productId) {
    const index = products.findIndex(p => p.id === productId);
    if (index !== -1) {
        products.splice(index, 1);
    }
}

function listProducts() {
    return products;
}

// Shopping cart functionality
let cart = [];

function addToCart(product) {
    cart.push(product);
}

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
    }
}

function viewCart() {
    return cart;
}

// Admin panel functionality
function adminView() {
    return {
        products,
        cart
    };
}

// WhatsApp integration
function sendWhatsAppMessage(message) {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(url);
}

// Export functions for external usage
export { addProduct, removeProduct, listProducts, addToCart, removeFromCart, viewCart, adminView, sendWhatsAppMessage };