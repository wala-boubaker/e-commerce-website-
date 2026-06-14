document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name'); // Récupérer le nom de l'article
            const price = button.getAttribute('data-price'); // Récupérer le prix de l'article
            const image = button.parentElement.querySelector('img').src; // Récupérer l'image de l'article
            const item = { name, price, image };
            const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
            cartItems.push(item);
            localStorage.setItem('cart', JSON.stringify(cartItems));
            alert(`${name} a été ajouté au chariot!`);
        });
    });
});

