import { translateMorse } from "./translator.js";

const englishInp = document.querySelector(".morse-translator__input-field");
const morseOut = document.querySelector(".morse-translator__output");
const submitBtn = document.querySelector(".morse-translator__submit");

const morseInp = document.querySelector("#transMorse");
const engOut = document.querySelector("#showEng");


const displayOutput = () => {
    morseOut.innerHTML = translateMorse(englishInp.value);
}; 

submitBtn.addEventListener("click", displayOutput);
console.log(englishInp.value)


// had issues with styling and DOM, ran out of time for second translator :|