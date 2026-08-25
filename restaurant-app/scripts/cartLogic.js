import menuArray from './menuArray.js'
export { addToCart, removeFromCart, getCartData }

let cart = []

function addToCart (id) {
    const menuItem = findItemInMenuArray(id)
    const existingItemInCart = findItemInCart(id)

    if (existingItemInCart) {
        existingItemInCart.quantity ++
        return
    }

    const newOrderItem = { ...menuItem, quantity: 1}
    cart.push(newOrderItem)
}

function removeFromCart (id) {
    const existingItemInCart = findItemInCart(id)

    if (existingItemInCart) {
        existingItemInCart.quantity--
        if (existingItemInCart.quantity < 1) {
            cart.splice(cart.indexOf(existingItemInCart), 1)
        }
    } else {
        console.error(id + ' does not match any item in the cart.')
    }
}

function findItemInMenuArray (id) {
    const menuItem = menuArray.find(item => id === String(item.id))

    if(!menuItem) {
        console.error('Item ID not found')
    }

    return menuItem
}

function findItemInCart (id) {
    return cart.find(item => id === String(item.id))
}


function getCartData () {
    return cart
}