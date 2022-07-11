import { expect, it} from "@jest/globals";
import { translateMorse } from "./main";

// valid test cases
it("translates english 'a' to morse code '.-'", () => {
    const result = translateMorse('a');
    expect(result).toBe('.-');
});

it("translates english 'b' to morse code '-...'", () => {
    const result = translateMorse('b');
    expect(result).toBe('-...');
});

it("translates english 'c' to morse code '-.-.'", () => {
    const result = translateMorse('c');
    expect(result).toBe('-.-.');
});

it("translates english 'complex' to morse code '-.-. --- -- .--. .-.. . -..-'", () => {
    const result = translateMorse('complex');
    expect(result).toBe('-.-. --- -- .--. .-.. . -..-');
});


// invalid test cases
it("outputs 'invalid input' when '@!#' is inputted", () => {
    const result = translateMorse('@!#');
    expect(result).toBe('invalid input');
});

