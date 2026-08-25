import menuArray from './menuArray.js'
import { renderCards, renderCart, renderCardDetailsModal } from './renderLogic.js'
import { addToCart, removeFromCart, getCartData } from './cartLogic.js'
import { closeCardDetailsModal } from './cardDetailsLogic.js'

const userActions = {
    addToCart : function(target) {
        addToCart(target.dataset.id)

        const updatedCart = getCartData()
        renderCart(updatedCart)
    },
    removeFromCart : function(target) {
        removeFromCart(target.dataset.id)

        const updatedCart = getCartData()
        renderCart(updatedCart)
    },
    completeOrder : function() {
        renderCardDetailsModal()
    },
    closeCardDetailsModal : function() {
        closeCardDetailsModal()
    }
}

renderCards(menuArray)

document.addEventListener('click', event => {
    const action = event.target.dataset.action

    if (userActions[action]) {
        userActions[action](event.target)
    }
})
