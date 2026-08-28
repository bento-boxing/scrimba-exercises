/*
Round decimals down to 3 decimal places.
1 meter = 3.281 feet
1 litre = 0.264 gallon
1 kilogram = 2.204 pound
 */

const unitInput = document.getElementById('unit-input')
const convertBtn = document.getElementById('convert-button')

convertBtn.addEventListener('click', renderConversions)

function renderConversions () {
    let userInput = unitInput.value
    const unitContainers = document.getElementsByClassName('unit-container')
    if (validateInput(userInput)) {
        userInput = Number(userInput)

        for(let i = 0; i < unitContainers.length; i++) {
            const unitParagraph = unitContainers[i].querySelector('p')

            const metricName = unitParagraph.dataset.metric
            const imperialName = unitParagraph.dataset.imperial
            const multiplier = Number(unitParagraph.dataset.multiplier)

            unitParagraph.textContent =
                `${userInput} ${metricName} = ${forwardConversion(userInput, multiplier, 3)} ${imperialName} | 
                ${userInput} ${metricName} = ${reverseConversion(userInput, multiplier, 3)} ${imperialName}`
        }
    } else {
        window.alert("Invalid input")
    }
}

function roundNumber (number, scale) {
    const sign = Math.sign(number) >= 0 ? 1 : -1
    const abs = Math.abs(number)
    return +(sign * (Math.round(abs + 'e+' + scale) + 'e-' + scale))
}

function validateInput(input) {
    return !isNaN(input) && input.trim().length > 0
}

function forwardConversion(number, multiplier, scale) {
    return roundNumber(number * multiplier, scale)
}

function reverseConversion(number, multiplier, scale) {
    return roundNumber(number / multiplier, scale)
}