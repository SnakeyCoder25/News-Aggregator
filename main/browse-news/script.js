/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "30%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// End of menu


function getNews() {
    var searchWord = document.getElementById("msg").value;
    const currentDate = new Date();
  
    // Subtract two days from the current date
    currentDate.setDate(currentDate.getDate() - 2);
  
    // Get the month from the updated date (0-11, where 0 represents January)
    const month = currentDate.getMonth();
  
    // Add 1 to the month since JavaScript months are zero-based (0-11)
    const formattedMonth = (month + 1).toString().padStart(2, "0");
  
    // Get the day from the updated date
    const day = currentDate.getDate();
  
    // Convert the day to a two-digit string format
    const formattedDay = day.toString().padStart(2, "0");
  
    let numOfArticles = 100;
  
    var url =
      "https://newsapi.org/v2/everything?" +
      "q=" +
      searchWord +
      "&" +
      "from=2023-" +
      formattedMonth +
      "-" +
      formattedDay +
      "&" +
      "sortBy=popularity&" +
      "language=en&" +
      "searchIn=title&" +
      "pageSize=" +
      numOfArticles +
      "&" +
      "apiKey=c86f8a41ad0143c3a4dff849ead3b860";
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const articles = data.articles;
        const output = document.getElementById("output");
        output.innerHTML = ""; // Clear previous news articles
  
        articles.forEach((article) => {
          const articleElement = document.createElement("div");
          articleElement.classList.add("article-container");
  
          const imageElement = document.createElement("img");
          imageElement.classList.add("article-image");
          imageElement.src = article.urlToImage;
          articleElement.appendChild(imageElement);
  
          const contentElement = document.createElement("div");
          contentElement.classList.add("article-content");
  
          const titleElement = document.createElement("h1");
          titleElement.classList.add("article-title");
          titleElement.innerText = article.title;
          contentElement.appendChild(titleElement);
  
          const sourceElement = document.createElement("p");
          sourceElement.classList.add("article-source");
          sourceElement.innerText = article.source.name;
          contentElement.appendChild(sourceElement);
  
          const descriptionElement = document.createElement("p");
          descriptionElement.classList.add("article-description");
          descriptionElement.innerText = article.description;
          contentElement.appendChild(descriptionElement);
  
          const linkElement = document.createElement("a");
          linkElement.classList.add("article-link");
          linkElement.href = article.url;
          linkElement.target = "_blank";
          linkElement.innerText = article.url;
          contentElement.appendChild(linkElement);
  
          articleElement.appendChild(contentElement);
          output.appendChild(articleElement);
        });
      });
  }
  

  
  