const investForm = document.getElementById('invest-form')
const outputDialog = document.querySelector('.outputs')
const outputButton = document.querySelector('.outputs button')

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