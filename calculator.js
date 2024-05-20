export function calculateTip(cost, tipPercentage = 0.15) {
    const tipAmount = (cost * tipPercentage).toFixed(2);
    const totalAmount = (cost * 1 + tipAmount * 1).toFixed(2);
    return { tipAmount, totalAmount };
}