document.addEventListener('DOMContentLoaded', function () {

let currentQuoteIndex = 0;
let quotesData = []

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    quotesData = data;
    displayQuote(currentQuoteIndex);
    




  }).catch(function(error){
    console.error('error fetching quotes:', error)
  }); 


  function displayQuote(index){
    const quoteContainer = document.getElementById('qoute-text')
    const quoteAuthor = document.getElementById('quote-author')
    const quoteData = quotesData[index];

    if(quoteData){
      quoteContainer.innerHTML= `${quoteData.text}`
      quoteAuthor.innerHTML = `${quoteData.author.replace("type.fit", "").trim()||'unknown'}`
    }
    else{
      quoteContainer.innerHTML= "Quote Unavailabe";
      quoteAuthor.innerHTML = 'Unknown';
    }
    }

    const changeQuoteBtn = document.getElementById('new-quote');
    changeQuoteBtn.addEventListener('click', function () {
        currentQuoteIndex = (currentQuoteIndex + 1) % quotesData.length;
        displayQuote(currentQuoteIndex);
    });

  })
  

  

  

