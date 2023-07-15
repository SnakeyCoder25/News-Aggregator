function changeSymbol(symbol) {
    // Find the script tag with the TradingView widget configuration
    var scriptTag = document.querySelector('script[src="https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js"]');
  
    // Check if the script tag exists
    if (scriptTag) {
      // Get the widget configuration object from the script's text content
      var config = JSON.parse(scriptTag.textContent);
  
      // Update the symbol property with the new stock symbol
      config.symbol = symbol;
  
      // Remove the existing TradingView widget
      var container = document.querySelector('.tradingview-widget-container');
      container.innerHTML = '';
  
      // Create a new script element
      var newScript = document.createElement('script');
      newScript.type = 'text/javascript';
      newScript.async = true;
      newScript.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
      newScript.textContent = JSON.stringify(config);
  
      // Append the new script to the container
      container.appendChild(newScript);
    }
  }



function leftFunction() {
    // Function triggered by the left arrow
    console.log("Left arrow clicked");
    // Add your custom logic here
  }

  function rightFunction() {
    // Function triggered by the right arrow
    console.log("Right arrow clicked");
    changeSymbol("GOOGL")
    
  }