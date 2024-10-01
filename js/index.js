// Simple cart functionality
let cart = [];

function addToCart(item) {
    cart.push(item);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartCount = document.createElement('span');
    cartCount.textContent = cart.length;
    cartCount.style.backgroundColor = 'red';
    cartCount.style.color = 'white';
    cartCount.style.borderRadius = '50%';
    cartCount.style.padding = '2px 6px';
    cartCount.style.position = 'absolute';
    cartCount.style.top = '0';
    cartCount.style.right = '0';

    const cartIcon = document.querySelector('.fa-shopping-cart') || document.createElement('i');
    cartIcon.className = 'fas fa-shopping-cart';
    cartIcon.style.fontSize = '24px';
    cartIcon.style.position = 'fixed';
    cartIcon.style.top = '20px';
    cartIcon.style.right = '20px';
    cartIcon.style.zIndex = '1000';

    cartIcon.appendChild(cartCount);
    document.body.appendChild(cartIcon);
}

// Insurance quote functionality
function calculateInsuranceQuote(age, experience) {
    const basePrice = 1000;
    let multiplier = 1;

    if (age < 25) {
        multiplier += 0.3;
    } else if (age > 65) {
        multiplier += 0.2;
    }

    if (experience < 5) {
        multiplier += 0.2;
    } else if (experience > 20) {
        multiplier -= 0.1;
    }

    return basePrice * multiplier;
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const addToCartBtn = document.getElementById('addToCartBtn');
    const insuranceQuoteForm = document.getElementById('insuranceQuoteForm');
    const quoteResult = document.getElementById('quoteResult');

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const itemName = document.querySelector('h1').textContent;
            addToCart(itemName);
            alert(`${itemName} ha sido agregado al carrito.`);
        });
    }

    if (insuranceQuoteForm) {
        insuranceQuoteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const age = parseInt(document.getElementById('age').value);
            const experience = parseInt(document.getElementById('experience').value);
            const quote = calculateInsuranceQuote(age, experience);
            quoteResult.textContent = `Cotización de seguro estimada: $${quote.toFixed(2)}`;
        });
    }
});