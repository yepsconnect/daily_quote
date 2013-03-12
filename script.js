var quotes = ["Цитата 1", "Цитата 2", "Цитата 3", "Цитата 4", "Цитата 5"];

function getRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function updateQuote() {
  var quoteElement = document.getElementById("quote");
  quoteElement.textContent = getRandomQuote();
}

var newQuoteButton = document.getElementById("new-quote-btn");
newQuoteButton.addEventListener("click", updateQuote);

updateQuote();
