document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart');

    function loadCartItems() {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsContainer.innerHTML = '';

        cartItems.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'col-3';
            itemDiv.innerHTML = `
                <div class="card">
                    <img src="${item.image}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.price} dt</p>
                        <button class="btn btn-danger remove-item" data-index="${index}">Supprimer</button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(itemDiv);
        });

        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', removeItem);
        });
    }
    function removeItem(event) {
        const index = event.target.getAttribute('data-index');
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.splice(index, 1); 
        localStorage.setItem('cart', JSON.stringify(cartItems)); 
        loadCartItems(); 
    }

    clearCartButton.addEventListener('click', () => {
        localStorage.removeItem('cart'); 
        loadCartItems(); 
    });

    loadCartItems(); 
});
