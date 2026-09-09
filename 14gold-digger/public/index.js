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

    const price = Number(formData.get('investment-amount'))
    const weight = Number(formData.get('investment-amount') / currentPrice)

    investmentPrice.textContent = gbpFormatter.format(price)
    investmentWeight.textContent = fiveDPFormatter.format(weight)

    try {
        const res = await fetch('/api/new-purchase', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({price, weight})
        })

        if (!res.ok) {
            throw new Error('Error creating purchase, Response status: ' + res.status)
        }
    } catch (err) {
        console.error(err)
    }

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