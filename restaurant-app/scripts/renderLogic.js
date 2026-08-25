export { renderCards, renderCart}

const itemCards = document.getElementById('item-cards')

// Render cards for each item on the menu when first loading the page
function renderCards(menuArray) {
    itemCards.innerHTML = menuArray.map(item => {
        return `<div class="item-card" data-id="${item.id}">
                    <p class="emoji">${item.emoji}</p>
                    <div class="item-info">
                        <h2>${item.name}</h2>
                        <p>${item.ingredients.join(', ')}</p>
                        <h3>$${item.price}</h3>
                    </div>
                    <button 
                        type="button" 
                        aria-label="Add ${item.name} to cart" 
                        data-id="${item.id}" 
                        data-action="addToCart"
                        class="item-add-to-cart"
                    >+</button>
                </div>`
    }).join('')
}

function renderCart(cart) {
    let finalHtml = ``
    cart.forEach(newOrderItem => {
        finalHtml += `
                    <div class="order-item">
                    <h3>${newOrderItem.name} (x${newOrderItem.quantity})</h3>
                    <button type="button" data-order-id="${newOrderItem.id}">remove</button>
                    <p>$${newOrderItem.price * newOrderItem.quantity}</p>
                </div>`
    })

    document.getElementById('order-items').innerHTML = finalHtml
    const footer = document.getElementById('footer')

    if (footer.classList.contains('hide')) {
        footer.classList.remove('hide')
    }

    footer.querySelector('#order-total-price').textContent = '$' + cart.reduce((total, item) => total + item.price * item.quantity, 0)
}