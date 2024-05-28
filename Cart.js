document.addEventListener('DOMContentLoaded', function() {
    // Sticky Header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    // Update Cart Quantity and Total
    const cartTable = document.querySelector('.cart-table');
    const cartSummary = document.querySelector('.cart-summary');
    
    if (cartTable) {
        cartTable.addEventListener('input', function(event) {
            if (event.target.classList.contains('quantity')) {
                updateCart(event.target);
            }
        });

        cartTable.addEventListener('click', function(event) {
            if (event.target.classList.contains('remove-item')) {
                removeCartItem(event.target);
            }
        });
    }

    function updateCart(input) {
        const quantity = parseInt(input.value);
        const row = input.closest('tr');
        const price = parseFloat(row.querySelector('td:nth-child(2)').textContent.replace('$', ''));
        const totalCell = row.querySelector('td:nth-child(4)');
        totalCell.textContent = `$${(price * quantity).toFixed(2)}`;
        updateCartSummary();
    }

    function removeCartItem(button) {
        const row = button.closest('tr');
        row.remove();
        updateCartSummary();
    }

    function updateCartSummary() {
        const rows = cartTable.querySelectorAll('tbody tr');
        let subtotal = 0;
        rows.forEach(row => {
            const total = parseFloat(row.querySelector('td:nth-child(4)').textContent.replace('$', ''));
            subtotal += total;
        });
        cartSummary.querySelector('p').textContent = `Subtotal: $${subtotal.toFixed(2)}`;
    }
});