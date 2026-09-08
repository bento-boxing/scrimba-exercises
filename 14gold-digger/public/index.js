const investForm = document.getElementById('invest-form')
const outputDialog = document.querySelector('.outputs')
const outputButton = document.querySelector('.outputs button')
const eventSource = new EventSource('/api/gold-price')
const priceDisplay = document.getElementById('price-display')
const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
})

investForm.addEventListener('submit', async e => {
    e.preventDefault()
    const formData = new FormData(investForm)
    console.log(formData.get('investment-amount'))

    outputDialog.showModal()
})

outputButton.addEventListener('click', e => {
    e.preventDefault()
    outputDialog.close()
})

eventSource.addEventListener('price-updated', e => {
    const price = parseInt(e.data) / 100
    priceDisplay.textContent = formatter.format(price)
})

eventSource.onerror = event => {
    console.log('event error: ', event)
}