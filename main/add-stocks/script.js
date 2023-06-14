
function updateLocaldata() {
let x1 = document.getElementById("msg1").value;
localStorage.setItem("1", x1);
let x2 = document.getElementById("msg2").value;
localStorage.setItem("2", x2);
let x3 = document.getElementById("msg3").value;
localStorage.setItem("3", x3);
let x4 = document.getElementById("msg4").value;
localStorage.setItem("4", x4);
}
//localStorage.getElementById = document.getElementById("One");

//GPT CODE

/* 
async function getCurrentStockPrice(symbol) {
    const apiKey = 'mDRKtQCuCHeM5slDzrBpg9CUfuUJ8ZMs'; // Replace with your Polygon.io API key
    const url = `https://api.polygon.io/v1/last/stocks/${symbol}?apiKey=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data); // Log the response for troubleshooting
      const currentPrice = data.last.price;
  
      return currentPrice;
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  
  let slideIndex = 0;
  showSlides(slideIndex);
  
  function changeSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
  }
  
  async function showSlides(n) {
    const slides = document.getElementsByClassName('slide');
    if (n >= slides.length) {
      slideIndex = 0;
    } else if (n < 0) {
      slideIndex = slides.length - 2;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
  
    const currentIndex = slideIndex % Math.ceil(slides.length / 2) * 2;
  
    slides[currentIndex].style.display = 'block';
    slides[currentIndex + 1].style.display = 'block';
  
    const stockNames = ['AAPL', 'GOOGL', 'MSFT', 'AMZN']; // Example stock names
  
    const pricePromises = stockNames.map(symbol => getCurrentStockPrice(symbol));
    const prices = await Promise.all(pricePromises);
  
    document.getElementById('slide1').textContent = `${stockNames[0]}: ${prices[0]}`;
    document.getElementById('slide2').textContent = `${stockNames[1]}: ${prices[1]}`;
    document.getElementById('slide3').textContent = `${stockNames[2]}: ${prices[2]}`;
    document.getElementById('slide4').textContent = `${stockNames[3]}: ${prices[3]}`;
  }
  
  
*/
/*
function getprice(stockletters){
  const fetch = require('node-fetch');

// Replace 'YOUR_API_KEY' with your actual API key from Polygon.io
const apiKey = 'mDRKtQCuCHeM5slDzrBpg9CUfuUJ8ZMs';

// Define the symbol for AAPL (Apple Inc.)
const symbol = stockletters;

// Define the API endpoint for the last trade quote
const endpoint = `https://api.polygon.io/v2/last/trade/${symbol}?apiKey=${apiKey}`;

// Make the API request
fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    // Extract the current stock price
    const currentPrice = data.last.price;
    return currentPrice;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
*/






/*
function getStockPriceYesterday(stock) {
  
  var apiKey = 'mDRKtQCuCHeM5slDzrBpg9CUfuUJ8ZMs';
  var today = new Date();
  var yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  var dateStr = yesterday.toISOString().split('T')[0];

  var url = 'https://api.polygon.io/v2/aggs/ticker/' + stock + '/prev?unadjusted=true&apiKey=' + apiKey + '&endDate=' + dateStr + '&limit=1';

  $.getJSON(url, function(data) {
      var stockPriceYesterday = data.results[0].c;
      $('#stockPriceYesterday').text(stockPriceYesterday);
  });
}
*/
$(document).ready(function() {
  let slideIndex = 0;
  showSlides(slideIndex);

  function changeSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
  }

  function showSlides(n) {
    const slides = document.getElementsByClassName('slide');
    if (n >= slides.length) {
      slideIndex = 0;
    } else if (n < 0) {
      slideIndex = slides.length - 2;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    const currentIndex = slideIndex % Math.floor(slides.length / 2) * 2;

    slides[currentIndex].style.display = 'block';
    slides[currentIndex + 1].style.display = 'block';

    const stockNames = ['AAPL', 'GOOGL', 'MSFT', 'AMZN']; // Example stock names
    document.getElementById('slide1').textContent = stockNames[currentIndex / 2] + ': ' + getStockPriceYesterday(stockNames[currentIndex / 2]);
    document.getElementById('slide2').textContent = stockNames[currentIndex / 2 + 1] + ': ' + getStockPriceYesterday(stockNames[currentIndex / 2 + 1]);
    document.getElementById('slide3').textContent = stockNames[(currentIndex / 2 + 2) % stockNames.length] + ': ' + getStockPriceYesterday(stockNames[(currentIndex / 2 + 2) % stockNames.length]);
    document.getElementById('slide4').textContent = stockNames[(currentIndex / 2 + 3) % stockNames.length] + ': ' + getStockPriceYesterday(stockNames[(currentIndex / 2 + 3) % stockNames.length]);
  }

  // Function to make the API request and get the stock price
  function getStockPriceYesterday(stockSymbol) {
    var apiKey = 'YOUR_API_KEY';
    var today = new Date();
    var yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    var dateStr = yesterday.toISOString().split('T')[0];

    var url = 'https://api.polygon.io/v2/aggs/ticker/' + stockSymbol + '/prev?unadjusted=true&apiKey=' + apiKey + '&endDate=' + dateStr + '&limit=1';

    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          var stockPriceYesterday = data.results[0].c;
          resolve(stockPriceYesterday);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  // Call the function to initially populate the stock prices
  Promise.all([
    getStockPriceYesterday('AAPL'),
    getStockPriceYesterday('GOOGL'),
    getStockPriceYesterday('MSFT'),
    getStockPriceYesterday('AMZN')
  ])
  .then(stockPrices => {
    document.getElementById('slide1').textContent += ' ' + stockPrices[0];
    document.getElementById('slide2').textContent += ' ' + stockPrices[1];
    document.getElementById('slide3').textContent += ' ' + stockPrices[2];
    document.getElementById('slide4').textContent += ' ' + stockPrices[3];
  })
  .catch(error => {
    console.log('Error fetching stock prices:', error);
  });

  // Refresh the stock prices on page reload
  $(window).on('beforeunload', function() {
    Promise.all([
      getStockPriceYesterday('AAPL'),
      getStockPriceYesterday('GOOGL'),
      getStockPriceYesterday('MSFT'),
      getStockPriceYesterday('AMZN')
    ])
    .then(stockPrices => {
      document.getElementById('slide1').textContent += ' ' + stockPrices[0];
      document.getElementById('slide2').textContent += ' ' + stockPrices[1];
      document.getElementById('slide3').textContent += ' ' + stockPrices[2];
      document.getElementById('slide4').textContent += ' ' + stockPrices[3];
    })
    .catch(error => {
      console.log('Error fetching stock prices:', error);
    });
  });
});
$(document).ready(function() {
  // Function to make the API request and update the stock price
  function getStockPriceYesterday() {
      // Replace 'YOUR_API_KEY' with your actual Polygon.io API key
      var apiKey = 'mDRKtQCuCHeM5slDzrBpg9CUfuUJ8ZMs';
      var today = new Date();
      var yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);
      var dateStr = yesterday.toISOString().split('T')[0];

      var url = 'https://api.polygon.io/v2/aggs/ticker/AAPL/prev?unadjusted=true&apiKey=' + apiKey + '&endDate=' + dateStr + '&limit=1';

      $.getJSON(url, function(data) {
          var stockPriceYesterday = data.results[0].c;
          $('#stockPriceYesterday').text(stockPriceYesterday);
      });
  }

  // Call the function to initially populate the stock price
  getStockPriceYesterday();

  // Refresh the stock price on page reload
  $(window).on('beforeunload', function() {
      getStockPriceYesterday();
  });
});


  
  
  
  