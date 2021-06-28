import {compute} from "./hamming.js";

let showResultBtn = document.getElementById('show-result-cta');
let clearFormBtn = document.getElementById('clear-form');
let form = document.getElementById("my-form");
let result = document.getElementById("result");
let outputBorder = document.getElementById("box-border");


showResultBtn.addEventListener('click', () => {
    let inputA = document.getElementById('dna-string-a').value;
    let inputB = document.getElementById('dna-string-b').value;
    let error;

    try {
        compute(inputA, inputB);
    } catch (e) {
        error = e;
        result.innerHTML = `<span class="error">Please, be careful, ${error}!</span> `;
        outputBorder.style.borderColor = "red";
    }

    result.innerHTML = `The Hamming Distance is <span class="hamming-distance">${compute(inputA, inputB)}</span>`;
    outputBorder.style.borderColor = "lightgrey";

});

clearFormBtn.addEventListener('click', () => {
    form.reset();
    result.innerHTML = "";
    outputBorder.style.borderColor = "lightgrey";
});
