function changeSymbol(symbol) {
    new TradingView.widget({
      "symbol": "NASDAQ:" + symbol,
      "width": 350,
      "colorTheme": "light",
      "isTransparent": false,
      "locale": "en"
    }).embed("tradingview-widget");
  }
  