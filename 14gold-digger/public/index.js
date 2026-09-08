const investForm = document.getElementById('invest-form')
const outputDialog = document.querySelector('.outputs')
const outputButton = document.querySelector('.outputs button')
const eventSource = new EventSource('/api/gold-price')
const priceDisplay = document.getElementById('price-display')

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
    priceDisplay.textContent = e.data
})

eventSource.onerror = event => {
    console.log('event error: ', event)
}