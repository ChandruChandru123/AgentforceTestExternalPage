// Change main image when thumbnail clicked
function changeImage(thumbnailElement) {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    mainImage.src = thumbnailElement.src;
    
    // Remove active class from all thumbnails
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    
    // Add active class to clicked thumbnail
    thumbnailElement.classList.add('active');
}

// Quantity control
let currentQuantity = 1;
const maxQuantity = 50;

function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (currentQuantity < maxQuantity) {
        currentQuantity++;
        quantityInput.value = currentQuantity;
    }
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (currentQuantity > 1) {
        currentQuantity--;
        quantityInput.value = currentQuantity;
    }
}

// Add to cart
let cartCount = 0;

function addToCart() {
    const btn = event.target;
    const originalText = btn.textContent;
    const quantity = document.getElementById('quantity').value;
    
    // Show success state
    btn.textContent = '✓ Added to Cart';
    btn.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
    
    // Update cart count
    cartCount++;
    document.querySelector('.cart-icon').textContent = `🛒 Cart (${cartCount})`;
    
    // Show toast
    showToast(`Product added! Quantity: ${quantity}`);
    
    // Reset button after 2 seconds
    setTimeout(() => {
        btn.textContent = '🛒 Add to Cart';
        btn.style.background = 'linear-gradient(135deg, #007bff, #0056b3)';
    }, 2000);
}

// Toggle wishlist
let isWishlisted = false;

function toggleWishlist() {
    const btn = event.target;
    isWishlisted = !isWishlisted;
    
    if (isWishlisted) {
        btn.classList.add('active');
        btn.style.color = 'white';
        showToast('Added to Wishlist ❤️');
    } else {
        btn.classList.remove('active');
        btn.style.color = '#007bff';
        showToast('Removed from Wishlist');
    }
}

// Toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Color selection
document.addEventListener('DOMContentLoaded', function() {
    const colorButtons = document.querySelectorAll('.color-btn');
    
    colorButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            colorButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// Initialize quantity
document.addEventListener('DOMContentLoaded', function() {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = currentQuantity;
});
