//import Coin from "./scripts/functionality"
import allCoinData from './scripts/coinData'; 
console.log(allCoinData);
document.addEventListener("DOMContentLoaded", () => {

    const name = document.getElementById('name');
    const buyDate = document.getElementById('buyDate');
    const sellDate = document.getElementById('sellDate');
    const submitButton = document.querySelector('.submit-button')

    submitButton.addEventListener('click', (e) => {
       fetch(`https://api.coingecko.com/api/v3/coins/${name.value}/market_chart/range?vs_currency=usd&from=${Math.floor(new Date(buyDate.value).getTime() / 1000)}&to=${Math.floor(new Date(sellDate.value).getTime() / 1000)}`)
        .then(response => response.json()) 
        .then(data => {
            console.log(data);

            // I need to make sure I can reference the data across files.
            // const dataHash = return data;
        });
    })
});

// var obj;

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(res => res.json())
//   .then(data => obj = data)
//   .then(() => console.log(obj))