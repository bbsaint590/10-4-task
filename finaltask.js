
document.querySelector("#annualButton").addEventListener('click', () => {
    const monthlyPrice = document.querySelector('#price1');
    const annualPrice = Math.round (monthlyPrice.textContent * 11);
    monthlyPrice.classList.add('text-green-500');
    monthlyPrice.textContent = "Annual price:£" + annualPrice;
});

document.querySelector("#annualButton").addEventListener('click', () => {
    const monthlyPrice = document.querySelector('#price2');
    const annualPrice = Math.round (monthlyPrice.textContent * 11);
    monthlyPrice.classList.add('text-green-500');
    monthlyPrice.textContent = "Annual price:£" + annualPrice;
});


document.querySelector("#annualButton").addEventListener('click', () => {
    const monthlyPrice = document.querySelector('#price3');
    const annualPrice = Math.round (monthlyPrice.textContent * 11);
    monthlyPrice.classList.add('text-green-500');
    monthlyPrice.textContent = "Annual price:£" + annualPrice;
});
