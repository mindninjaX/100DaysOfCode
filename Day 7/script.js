const quotes = {
    quote: ["Be yourself; everyone else is already taken.","Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","A room without books is like a body without a soul.","You've gotta dance like there's nobody watching\, Love like you'll never be hurt\, Sing like there's nobody listening\, And live like it's heaven on earth.","You know you're in love when you can't fall asleep because reality is finally better than your dreams.","You only live once, but if you do it right, once is enough.","Be the change that you wish to see in the world.","If you tell the truth, you don't have to remember anything."],
    author: ["Oscar Wilde", "Albert Einstein", "Marcus Tullius Cicero","William W. Purkey","Dr. Seuss","Mae West","Mahatma Gandhi","Mark Twain"]
}

function QuoteGenerate() {
    var rand = Math.floor(Math.random() * quotes.quote.length);

    document.getElementsByClassName("quote")[0].innerHTML = quotes.quote[rand];
    document.getElementsByClassName("author")[0].innerHTML = quotes.author[rand];
}