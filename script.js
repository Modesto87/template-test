const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');

const newQuoteBtn = document.getElementById('new-quote');



let apiQuotes = []


// Show new quote

function newQuote() {

    // pick a random quote from API

    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    //check autofield if is blank replace  it with unknow

    if (!quote.author) {
        authorText.textContent = 'Unknown'
    } else {
        authorText.textContent = quote.author;
    }

// check quote lenght to determine styling

if (quote.text.length > 80) {
    quoteText.classList.add('long-quote');
} else {
    quoteText.classList.remove('long-quote');
}

    quoteText.textContent = quote.text;
}

// obtenir les quotes de l'API


async function getQuotes () {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        
    }
}






// event listeners

newQuoteBtn.addEventListener('click', newQuote);





// On Load
getQuotes();

