export { submitPayment, closeCardDetailsModal }

const modal = document.getElementById('card-details')

function submitPayment(event) {
    event.preventDefault()
    const formElement = event.target.closest('.card-form')

    let collected = new FormData(formElement)

    // this simulates doing something with the collected data.
    console.log(...collected)

    // this would only return true if the payment was successful (verified externally)
    return true
}

function closeCardDetailsModal() {
    modal.close()
}