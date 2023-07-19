
// Auto Fills in the text field with what you already have.
document.getElementById("msg1").value = localStorage.getItem("1");
document.getElementById("msg2").value = localStorage.getItem("2");
document.getElementById("msg3").value = localStorage.getItem("3");
document.getElementById("msg4").value = localStorage.getItem("4");

document.getElementById("msg1N").value = localStorage.getItem("1N");
document.getElementById("msg2N").value = localStorage.getItem("2N");
document.getElementById("msg3N").value = localStorage.getItem("3N");
document.getElementById("msg4N").value = localStorage.getItem("4N");








function updateLocaldata() {
let x1 = document.getElementById("msg1").value; //Gets value from text slot
localStorage.setItem("1", x1); // Sets value to local storage postion labeled as '1'
let x2 = document.getElementById("msg2").value;
localStorage.setItem("2", x2);
let x3 = document.getElementById("msg3").value;
localStorage.setItem("3", x3);
let x4 = document.getElementById("msg4").value;
localStorage.setItem("4", x4);

let N1 = document.getElementById("msg1N").value;
localStorage.setItem("1N", N1);
let N2 = document.getElementById("msg2N").value;
localStorage.setItem("2N", N2);
let N3 = document.getElementById("msg3N").value;
localStorage.setItem("3N", N3);
let N4 = document.getElementById("msg4N").value;
localStorage.setItem("4N", N4);
location.reload();
}
//localStorage.getElementById = document.getElementById("One");



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
  
  // SearchStock js

  loadWidget("AAPL", "widget3"); //Intial load example
function SearchStockUpdate(){

  let searchSymbol = document.getElementById("SearchStockInput").value;
  loadWidget(searchSymbol, "widget3");
}