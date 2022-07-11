import { translateMorse } from "./translator.js";

const englishInp = document.querySelector(".morse-translator__input-field");
const morseOut = document.querySelector(".morse-translator__output");
const submitBtn = document.querySelector(".morse-translator__submit");

const displayOutput = () => {
    //let inpStr = englishInp.value;
    morseOut.innerHTML = translateMorse(englishInp.value);
}; 

submitBtn.addEventListener("click", displayOutput);
console.log(englishInp.value)


