const baseColor = document.getElementById("color")
const colorScheme = document.getElementById("color-scheme")
const chosenColours = document.getElementById("chosen-colours")

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault()

    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor.value.substring(1)}&mode=${colorScheme.value}&count=4`)
        .then(res => res.json())
        .then(coloursObject => {
            chosenColours.replaceChildren()
            for (const colour of coloursObject.colors) {
                insertColour(colour.hex.value)
                console.log(colour.hex.value)
            }
        })
})

// This function NEEDS the hex with hashtag!
function insertColour(hex) {
    const chosenColourItem = document.createElement('div')
    chosenColourItem.classList.add('chosen-colours__item')
    chosenColourItem.setAttribute('data-colour', hex)

    const chosenColourItemColour = document.createElement('div')
    chosenColourItemColour.classList.add('chosen-colours__item__colour')
    chosenColourItemColour.style.backgroundColor = hex

    const chosenColourItemText = document.createElement('p')
    chosenColourItemText.classList.add('chosen-colours__item__text')
    chosenColourItemText.textContent = hex

    chosenColourItem.appendChild(chosenColourItemColour)
    chosenColourItem.appendChild(chosenColourItemText)

    chosenColours.appendChild(chosenColourItem)
}