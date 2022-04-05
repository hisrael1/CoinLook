// when I arrive at a roadblock, I need to see it like a puzzle
// that I get the opprotunity to solve. A test on whether or not 
// I can use all the resources given to me to find the answer 
// to the puzzle, or whether I am incapable of doing so.
//I must break the problem down one small step at a time.
// I keep getting to points where I feel like I'm stuck, but really, I think
// I've somewhat given up and am looping my mind in circles, merely going
// through the motions in order to pretend to myself that I'm still being productive. 
// When i get stuck, I need to start writing. I need to write out my questions. 
// I need to break down these problems to the smallest possible level.
// A symptom of being in loopdy town is if I'm not even sure what question I'm confused about

// If it feels like you're forcing it and it's grueling you arent' doing it correctly





// I think I'm going to need to create a form using html or the dom in order to retreive user input.
// I will then need to use fetch to post? it to search in the api and get the response.




// For the search
// Add input to the html
// <input id="input" type="text" />

// function refreshData(e) {
//     const coinName = e.target.value;
//     const url = `https://www.coingecko.com/en/coins/${coinName}`;
//     fetch(url)
//       .then((res) => res.json())
//       .then(console.log);
//   }

// const input = document.getElementById("input");

// input.addEventListener("change", refreshData);

// For date
// I need to find a unix time to date function and a date to unix time function
// date to unix time. Math.floor(new Date('2020.12.10').getTime() / 1000)
// unix time to date

// copied from https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
// var s = new Date(1504095567183).toLocaleDateString("en-US")
// console.log(s)

// function timeConverter(UNIX_timestamp){
//     var a = new Date(UNIX_timestamp * 1000);
//     var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
//     var year = a.getFullYear();
//     var month = months[a.getMonth()];
//     var date = a.getDate();
//     var hour = a.getHours();
//     var min = a.getMinutes();
//     var sec = a.getSeconds();
//     var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
//     return time;
// }

// I need to get the date from the user in the format of 2020.12.10
// Convert it to the unix timestamp
// I want usd to be a default
// put it into the fetch request