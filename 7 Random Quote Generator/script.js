const quotes = [
    { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" }
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex].quote;
    document.getElementById("author").textContent = `- ${quotes[randomIndex].author}`;
}
