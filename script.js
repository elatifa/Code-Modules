

import { calculateTip } from './calculator.js';

const button = document.querySelector('button');
const output = document.querySelector('.output');

button.addEventListener('click', () => {
    const cost = document.querySelector('input').value;
    const { tipAmount, totalAmount } = calculateTip(cost);
    
    let temp = `<h1>You should tip $${tipAmount} (15%) on $${cost}</h1>`;
    temp += `<h2>Total amount: $${totalAmount}</h2>`;
    output.innerHTML = temp;
});