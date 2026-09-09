const investForm = document.getElementById('invest-form')
const outputDialog = document.querySelector('.outputs')
const outputButton = document.querySelector('.outputs button')
const eventSource = new EventSource('/api/gold-price')
const priceDisplay = document.getElementById('price-display')
const investmentWeight = document.getElementById('investment-weight')
const investmentPrice = document.getElementById('investment-price')

const fiveDPFormatter = new Intl.NumberFormat('en-GB', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 5,
})
const gbpFormatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
})

let currentPrice = 0

investForm.addEventListener('submit', async e => {
    e.preventDefault()
    const formData = new FormData(investForm)
    console.log(formData.get('investment-amount'))

    investmentPrice.textContent = gbpFormatter.format(Number(formData.get('investment-amount')))
    investmentWeight.textContent = fiveDPFormatter.format(Number(formData.get('investment-amount') / currentPrice))

    outputDialog.showModal()
})

outputButton.addEventListener('click', e => {
    e.preventDefault()
    outputDialog.close()
})

eventSource.addEventListener('price-updated', e => {
    const price = parseInt(e.data) / 100
    currentPrice = price
    priceDisplay.textContent = gbpFormatter.format(price)
})

eventSource.onerror = event => {
    console.log('event error: ', event)
}