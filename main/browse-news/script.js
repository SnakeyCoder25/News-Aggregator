function getNews() {
    var searchWorkd = document.getElementById("msg").value;


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



   var url = 'https://newsapi.org/v2/everything?' +
      'q='+ searchWorkd + '&' +
      'from=2023-'+ formattedMonth +'-'+ formattedDay +'&' +
      'sortBy=popularity&' +
      'language=en&' +
      'searchIn=title&' +
      'apiKey=c86f8a41ad0143c3a4dff849ead3b860';

    

    fetch(url) 
    .then(a => a.json())
    .then(response => {
        for(var i=0; i<response.articles.length; i++){
            document.getElementById("output").innerHTML += "<div style='padding-top: 20px; background-color: lightblue;'> <img style='float:left; width:150px;' src='" +
            response.articles[i].urlToImage +
            "'><h1>" +
            response.articles[i].title +
            "</h1>" +
            response.articles[i].source.name +
            "<br>" +
            response.articles[i].description +
            " <a href='" +
            response.articles[i].url +
            "' target='_blank'>" +
            response.articles[i].url +
            "</a></div>";
        }
    })
  
          
            //document.getElementById("demo").innerHTML = response.json();
        
}