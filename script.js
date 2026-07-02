// ===== Product Quantity =====
let quantity = 1;
const maxQuantity = 50;

function increaseQty() {
    const input = document.getElementById('qty');
    if (quantity < maxQuantity) {
        quantity++;
        input.value = quantity;
    }
}

function decreaseQty() {
    const input = document.getElementById('qty');
    if (quantity > 1) {
        quantity--;
        input.value = quantity;
    }
}

// ===== Change Main Image =====
function changeMainImage(thumbnailElement) {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    mainImage.src = thumbnailElement.src;
    
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnailElement.classList.add('active');
}

// ===== Color Selection =====
function selectColor(colorBtn) {
    const colorButtons = document.querySelectorAll('.color-option');
    colorButtons.forEach(btn => btn.classList.remove('active'));
    colorBtn.classList.add('active');
}

// ===== Add to Cart =====
let cartCount = 0;

function addToCart() {
    const btn = event.target.closest('.btn-primary');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '✓ Added to Cart!';
    btn.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
    
    cartCount++;
    updateCartCount();
    showToast(`Added ${quantity} item(s) to cart!`);
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = 'linear-gradient(135deg, #007bff, #0056b3)';
    }, 2000);
}

// ===== Wishlist =====
let isWishlisted = false;

function addToWishlist() {
    const btn = event.target.closest('.btn-secondary');
    isWishlisted = !isWishlisted;
    
    if (isWishlisted) {
        btn.style.background = '#007bff';
        btn.style.color = 'white';
        showToast('Added to Wishlist ❤️');
    } else {
        btn.style.background = 'white';
        btn.style.color = '#007bff';
        showToast('Removed from Wishlist');
    }
}

// ===== Quick Add Related Products =====
function quickAdd(productName) {
    cartCount++;
    updateCartCount();
    showToast(`${productName} added to cart!`);
}

// ===== Update Cart Count =====
function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    cartCountElement.textContent = `Cart (${cartCount})`;
}

// ===== Toast Notification =====
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Product Page Loaded Successfully');
    document.getElementById('qty').value = quantity;
});
