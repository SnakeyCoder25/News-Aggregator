

var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2023-05-21&' +
          'sortBy=popularity&' +
          'apiKey=c86f8a41ad0143c3a4dff849ead3b860';

var response = await fetch(url);
var data = await response.json();
console.log(data);