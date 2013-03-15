var allQuotes = ["Цитата 1", "Цитата 2", "Цитата 3", "Цитата 4", "Цитата 5"];

var shownQuotes = [];

function getRandomQuote() {
  if (shownQuotes.length === 0) {
    shownQuotes = allQuotes.slice(0);
  }

  var randomIndex = Math.floor(Math.random() * shownQuotes.length);
  return shownQuotes.splice(randomIndex, 1)[0];
}

function updateQuote() {
  var quoteElement = document.getElementById("quote");
  quoteElement.textContent = getRandomQuote();
}

var newQuoteButton = document.getElementById("new-quote-btn");
newQuoteButton.addEventListener("click", updateQuote);

updateQuote();
