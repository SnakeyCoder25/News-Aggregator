var symbols = ["NVDA", "AAPL", "GOOGL", "TSLA"]; // Stock symbols for the widgets
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
