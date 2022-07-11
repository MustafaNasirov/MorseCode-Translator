
var morseDict =  {
    a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", g: "--.", h: "....", i: "..", j: ".---", k: "-.-", l: ".-..", m: "--", n: "-.", o: "---", p: ".--.", q: "--.-", r: ".-.", s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-", y: "-.--", z: "--..", 0: "-----", 1: ".----", 2: "..---", 3: "...--", 4: "....-", 5: ".....", 6: "-....", 7: "--...", 8: "---..", 9: "----.", " ": "/",
  };

export const translateMorse = (morseInp) =>{
        
        const strArr = (morseInp.toLowerCase()).split("");

        const morseCodedArr = strArr.map((char) => morseDict[char]);
        const finalMorseStr = morseCodedArr.join(" ");
        return finalMorseStr;
        

}; 

/* 
const checkIfValid = (string) =>{
    let invalidChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (invalidChars.test(string)) {
            return false;
        }
        else return true;
    };
     */
