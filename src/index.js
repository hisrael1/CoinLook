import lineGraph from './scripts/lineChart.js'
document.addEventListener("DOMContentLoaded", () => {

    const name = document.getElementById('name');
    const buyDate = document.getElementById('buyDate');
    const sellDate = document.getElementById('sellDate');
    const submitButton = document.querySelector('.submit-button')

    submitButton.addEventListener('click', (e) => {
        let dataHash;
       fetch(`https://api.coingecko.com/api/v3/coins/${name.value}/market_chart/range?vs_currency=usd&from=${Math.floor(new Date(buyDate.value).getTime() / 1000)}&to=${Math.floor(new Date(sellDate.value).getTime() / 1000)}`)
        .then(response => response.json()) 
        .then((data) => {
            dataHash = data.prices;
            lineGraph(dataHash);
        });
        });
    });