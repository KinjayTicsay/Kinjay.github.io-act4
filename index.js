// for the quote preferences
var quoteAPI = 'https://type.fit/api/quotes';

fetch(quoteAPI)
.then(res => res.json)
.then(data => console.log(data));

then(data => JSON.stringify(data[Math.floor(Math.random(data)* data.length)]))

.then(data2 => console.log("${JSON.parse(data2).text}"-${JSON.parse(data2).author}))

function displayQoute(quote)

var quoteText = document.query ('.qoute-text'); quoteText.textContent = quote;

var newQouteButton =document.quote ('.new-qoute');

newQouteButton.add addEventListener(click.get.quote)