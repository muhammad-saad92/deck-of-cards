let deckId = '';

fetch('https://deckofcardsapi.com/api/deck/atakr5asehnx/draw/?count=2')
.then(res => res.json())
.then(data => {
    console.log(data)
    deckId = data.deck_id;
})
.catch(err => {
    console.log(`Error: ${err}`)
})



