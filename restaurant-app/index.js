import menuArray from './menuArray.js'

const itemCards = document.getElementById('item-cards')

function renderCards(menuArray) {
    itemCards.innerHTML = menuArray.map(item => {
        return `<div class="item-card" data-item-id="${item.id}">
                    <p class="emoji">${item.emoji}</p>
                    <div class="item-info">
                        <h2>${item.name}</h2>
                        <p>${item.ingredients.join(', ')}</p>
                        <h3>$${item.price}</h3>
                    </div>
                    <button 
                        type="button" 
                        aria-label="Add ${item.name} to cart" 
                        data-item-id="${item.id}" 
                        class="item-add-to-cart"
                    >+</button>
                </div>`
    }).join('')
}

renderCards(menuArray)

