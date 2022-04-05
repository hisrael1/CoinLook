//import Coin from './scripts/functionality.js';

// let url = `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart/range?vs_currency=${usd}&from=${buyTimeStamp}&to=${sellTimeStamp}`;



// function allCoinData() {
//     // I need to use DOM manipulation to get the arguements 
//     //from the form to create a new coin. 
//     const name = document.getElementById('name').value;
//     const buyDate = document.getElementById('buyDate').value;
//     const sellDate = document.getElementById('sellDate').value;

//     console.log(name);
//     console.log(buyDate);
//     console.log(sellDate);
//     // const coin = new Coin();
//     return fetch(`https://api.coingecko.com/api/v3/coins/${coin.name}/market_chart/range?vs_currency=${coin.vsCurrency}&from=${coin.buyDate}&to=${coin.sellDate}`)
//         .then(response => response.json()) 
//         .then(data => {
//             return data;
//         })
//     // }
// }

// export default allCoinData;