var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2023-05-21&' +
          'sortBy=popularity&' +
          'apiKey=c86f8a41ad0143c3a4dff849ead3b860';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })