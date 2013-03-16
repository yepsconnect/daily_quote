var allQuotes = [
  "Жизнь — это как вождение велосипеда. Чтобы сохранить равновесие, вы должны двигаться.",
  "Будьте сами собой, все остальные места уже заняты.",
  "Не верьте всему, что вы читаете в интернете.",
  "Сделайте то, что вы можете, с тем, что у вас есть, там, где вы находитесь.",
  "Возможности также приходят в костюмах проблем.",
  "Будьте лучше, чем вчера, но не так хороши, как завтра.",
  "Сложности — это тонкости, которые не видны на первый взгляд.",
];

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
  var quoteContainer = document.querySelector(".quote-container");

  quoteContainer.style.opacity = 0;

  setTimeout(function () {
    var newQuote = getRandomQuote();
    quoteElement.textContent = newQuote;

    quoteContainer.style.opacity = 1;
  }, 500);
}

var newQuoteButton = document.getElementById("new-quote-btn");
newQuoteButton.addEventListener("click", updateQuote);

updateQuote();
