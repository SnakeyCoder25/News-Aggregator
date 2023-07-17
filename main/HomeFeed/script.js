// Start

var symbols = [String(localStorage.getItem("1")), String(localStorage.getItem("2")), String(localStorage.getItem("3")), String(localStorage.getItem("4"))]; // Stock symbols for the widgets

var leftIndex = 0;
var rightIndex = 1;

function loadWidget(symbol, widgetId) {
    const widgetContainer = document.getElementById(widgetId);

    // Remove the existing widget if any
    while (widgetContainer.firstChild) {
        widgetContainer.firstChild.remove();
    }

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
        "symbol": symbol,
        "width": 350,
        "colorTheme": "light",
        "isTransparent": false,
        "locale": "en"
    });

    widgetContainer.appendChild(script);
}

// Initial widget loading
updateWidgets();

function updateWidgets() {
    loadWidget(symbols[leftIndex], "widget1");
    loadWidget(symbols[rightIndex], "widget2");
}

function leftFunction() {
    leftIndex = (leftIndex - 1 + symbols.length) % symbols.length;
    rightIndex = (rightIndex - 1 + symbols.length) % symbols.length;
    updateWidgets();
}

function rightFunction() {
    leftIndex = (leftIndex + 1) % symbols.length;
    rightIndex = (rightIndex + 1) % symbols.length;
    updateWidgets();
}
// END

//NEWS API CODE FROM OTHER PAGE
function loadNews(searchWord) {
    const currentDate = new Date();
  
    // Subtract two days from the current date
    currentDate.setDate(currentDate.getDate() - 2);
  
    // Get the month from the updated date (0-11, where 0 represents January)
    const month = currentDate.getMonth();
  
    // Add 1 to the month since JavaScript months are zero-based (0-11)
    const formattedMonth = (month + 1).toString().padStart(2, '0');
  
    // Get the day from the updated date
    const day = currentDate.getDate();
  
    // Convert the day to a two-digit string format
    const formattedDay = day.toString().padStart(2, '0');
  
    let numOfArticles = 2;
  
    var url =
      'https://newsapi.org/v2/everything?' +
      'q=' +
      searchWord +
      '&' +
      'from=2023-' +
      formattedMonth +
      '-' +
      formattedDay +
      '&' +
      'sortBy=popularity&' +
      'language=en&' +
      'searchIn=title&' +
      'pageSize=' +
      numOfArticles +
      '&' +
      'apiKey=c86f8a41ad0143c3a4dff849ead3b860';
  
    fetch(url)
      .then((a) => a.json())
      .then((response) => {
        for (var i = 0; i < response.articles.length; i++) {
          document.getElementById('output').innerHTML +=
            "<div class='article-container'><img class='article-image' src='" +
            response.articles[i].urlToImage +
            "'><div class='article-content'><h1 class='article-title'>" +
            response.articles[i].title +
            "</h1><p class='article-source'>" +
            response.articles[i].source.name +
            '</p>' +
            "<p class='article-description'>" +
            response.articles[i].description +
            "</p><a class='article-link' href='" +
            response.articles[i].url +
            "' target='_blank'>" +
            response.articles[i].url +
            '</a></div></div>';
        }
      });
  }
  


//String(localStorage.getItem("4"))




//Call function

loadNews(String(localStorage.getItem("1N")));
loadNews(String(localStorage.getItem("2N")));
loadNews(String(localStorage.getItem("3N")));
loadNews(String(localStorage.getItem("4N")));