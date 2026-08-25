import menuArray from './menuArray.js'
export { addToCart, removeFromCart, getCartData }

let cart = []

function addToCart (id) {
    const menuItem = menuArray.find(item => id === String(item.id))
    if(!menuItem) {
        console.error('Item ID not found')
    }

    const existingItemInCart = cart.find(item => item.id === menuItem.id)

    if (existingItemInCart) {
        existingItemInCart.quantity ++
        return
    }

    const newOrderItem = { ...menuItem, quantity: 1}
    cart.push(newOrderItem)
}

function removeFromCart (id) {
    const menuItem = menuArray.find(item => id === String(item.id))
    if(!menuItem) {
        console.error('Item ID not found')
    }

    const existingItemInCart = cart.find(item => item.id === String(menuItem.id))

    if (existingItemInCart) {
        existingItemInCart.quantity--
        if (existingItemInCart.quantity < 1) {
            cart.splice(cart.indexOf(existingItemInCart), 1)
        }
    }
}

function getCartData () {
    return cart
}