const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
    "P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
    "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{",
    "[","}","]",",","|",":",";","<",">",".","?", "/"]

let generateButton = document.getElementById("generate");
let passwordContainer = document.getElementById("password-container");
let numberOfPasswords = passwordContainer.querySelectorAll(".copy").length;

let number = document.getElementById("numbers");
let symbol = document.getElementById("symbols");
let character = document.getElementById("characters");

generateButton.addEventListener("click", generate)

function generate() {
    let validCharacters = characters.slice()
    let numberOfCharacters = 15
    if (number.checked) {validCharacters = validCharacters.concat(numbers)}
    if(symbol.checked) {validCharacters = validCharacters.concat(symbols)}
    if(Number(character.value)) {
        numberOfCharacters = Number(character.value)
    }

    for(let i = 0; i < numberOfPasswords; i++) {
        let password = ""
        for (let j = 0; j < numberOfCharacters; j++) {
            password += validCharacters[Math.floor(Math.random() * validCharacters.length)]
        }
        passwordContainer.children[i].textContent = password;
    }
}

passwordContainer.addEventListener("click", copy)

function copy(event) {
    let element = event.target;
    if(element.nodeName === "BUTTON") {
        navigator.clipboard.writeText(element.textContent);
    }

    element.textContent = "Copied!"
}