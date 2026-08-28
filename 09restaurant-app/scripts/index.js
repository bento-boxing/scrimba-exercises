import menuArray from './menuArray.js'
import { renderCards, renderCart, renderCardDetailsModal, renderSuccessfulPayment, renderFailedPayment } from './renderLogic.js'
import { addToCart, removeFromCart, getCartData } from './cartLogic.js'
import { submitPayment, closeCardDetailsModal } from './cardDetailsLogic.js'

const userActions = {
    addToCart : function(event) {
        addToCart(event.target.dataset.id)

        const updatedCart = getCartData()
        renderCart(updatedCart)
    },
    removeFromCart : function(event) {
        removeFromCart(event.target.dataset.id)

        const updatedCart = getCartData()
        renderCart(updatedCart)
    },
    completeOrder : function() {
        renderCardDetailsModal()
    },
    closeCardDetailsModal : function() {
        closeCardDetailsModal()
    },
    submitPayment : function(event) {
        const ifPaid = submitPayment(event)
        if (ifPaid) {
            closeCardDetailsModal()
            renderSuccessfulPayment()
        } else {
            renderFailedPayment()
        }
    }
}

renderCards(menuArray)

document.addEventListener('click', event => {
    const action = event.target.dataset.action

    if (userActions[action]) {
        userActions[action](event)
    }
})
