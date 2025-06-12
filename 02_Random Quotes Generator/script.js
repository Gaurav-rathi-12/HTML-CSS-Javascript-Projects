let button = document.querySelector('.button')

function generateQuotes() {
    let quotes = {
        '-Nelson Mendela': 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        '-walt disney': 'The way to get started is to quit talking and begin doing. ',
        '-steve joves': `Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. `,
        '-James Cameron': `If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success`,
        '-Jones lalon': `You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.`
    }

    let authors = Object.keys(quotes)

    let author = authors[Math.floor(Math.random()*authors.length)]
    console.log(author);

    let quote = quotes[author]
    console.log(quote);
    document.querySelector('.quote').innerText = quote
    document.querySelector('.author').innerText = author
}

button.addEventListener('click',()=>{
    generateQuotes()
})