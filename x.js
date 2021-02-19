// "use strict";
const axios = require('axios');

function myDisplayer(from, to) {
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    // console.log(response.data.slice(0, 2));
    // console.log(response.status);
    // console.log(response.statusText);
    // console.log(response.headers);
    // console.log(response.config);
  })
  console.log('callback fn');
}

function myCalculator(from, to, myCallback) {
  myCallback(from, to);
}

 myCalculator(5, 5, myDisplayer);




 process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString;
let currentLine = 0;
let array = [];

process.stdin.on('data', inputStdin => {
    process.stdout.write("Enter array elements\n");   // without auto '\n' (newline)
    inputString = inputStdin
    console.log(inputString)

});

process.stdin.on('end', _ => {
    inputString = inputString.split(" ").map(x => {
        return parseInt(x);
    });
    main();
});

function readline() {
    return inputString;
}
