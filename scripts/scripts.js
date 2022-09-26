function displayRandomQuote() {
  var quotes = new Array();
  quotes[0] = "Do or do not, there is no try.";
  quotes[1] = "You miss 100% of the shots you don't take.";
  quotes[2] =
    "Setting goals is the first step in turning the invisible into the visible.";
  var rand = Math.floor(Math.random() * quotes.length);
  document.write(quotes[rand]);
}
