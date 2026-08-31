const baseColor = document.getElementById("color")
const colorScheme = document.getElementById("color-scheme")
const chosenColours = document.getElementById("chosen-colours")

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault()

    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor.value.substring(1)}&mode=${colorScheme.value}&count=4`)
        .then(res => res.json())
        .then(coloursObject => {
            document.createElement('div')
            insertColour(baseColor.value)

            for (const colour of coloursObject.colors) {

            }
        })
})

function insertColour(hex) {
    const chosenColourItem = document.createElement('div')
    chosenColourItem.classList.add('chosen-colour__item')

    const chosenColourItemColour = document.createElement('div')
    chosenColourItemColour.classList.add('chosen-colour__item__colour')
    chosenColourItemColour.style.backgroundColor = hex

    const chosenColourItemText = document.createElement('p')
    chosenColourItemText.classList.add('chosen-colour__item__text')
    chosenColourItemText.textContent = hex

    chosenColourItem.appendChild(chosenColourItemColour)
    chosenColourItem.appendChild(chosenColourItemText)

    chosenColours.appendChild(chosenColourItem)
}