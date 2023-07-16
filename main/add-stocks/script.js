
function updateLocaldata() {
let x1 = document.getElementById("msg1").value;
localStorage.setItem("1", x1);
let x2 = document.getElementById("msg2").value;
localStorage.setItem("2", x2);
let x3 = document.getElementById("msg3").value;
localStorage.setItem("3", x3);
let x4 = document.getElementById("msg4").value;
localStorage.setItem("4", x4);
location.reload();
}
//localStorage.getElementById = document.getElementById("One");



  // Start

var symbols = [String(localStorage.getItem("1")), String(localStorage.getItem("2")), String(localStorage.getItem("3")), String(localStorage.getItem("4"))]; // Stock symbols for the widgets
//This needs
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
  
  // SearchStock js

  loadWidget("AAPL", "widget3"); //Intial load example
function SearchStockUpdate(){

  let searchSymbol = document.getElementById("SearchStockInput").value;
  loadWidget(searchSymbol, "widget3");
}