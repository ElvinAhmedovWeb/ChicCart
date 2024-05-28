document.addEventListener('DOMContentLoaded', function() {
    // Sticky Header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    // Product Carousel
    const carousel = document.querySelector('.product-carousel');
    let isDown = false;
    let startX;
    let scrollLeft;

    if (carousel) {
        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            carousel.classList.add('active');
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });

        carousel.addEventListener('mouseleave', () => {
            isDown = false;
            carousel.classList.remove('active');
        });

        carousel.addEventListener('mouseup', () => {
            isDown = false;
            carousel.classList.remove('active');
        });

        carousel.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 3; // scroll-fast
            carousel.scrollLeft = scrollLeft - walk;
        });
    }

    // Newsletter Form Validation
    const newsletterForm = document.querySelector('.newsletter form');
    const emailInput = newsletterForm ? newsletterForm.querySelector('input[type="email"]') : null;
    const submitButton = newsletterForm ? newsletterForm.querySelector('button') : null;

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateEmail(emailInput.value)) {
                alert('Thank you for subscribing!');
                emailInput.value = ''; // Reset form field
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Filter Functionality
    const priceRange = document.getElementById('priceRange');
    const priceLabel = document.querySelector('label[for="priceRange"]');

    if (priceRange && priceLabel) {
        priceRange.addEventListener('input', function() {
            priceLabel.textContent = `Up to $${priceRange.value}`;
            filterProductsByPrice(priceRange.value);
        });
    }

    function filterProductsByPrice(maxPrice) {
        const products = document.querySelectorAll('.shop-products .product-item');
        products.forEach(product => {
            const price = parseFloat(product.querySelector('p').textContent.replace('$', ''));
            if (price <= maxPrice) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }
});