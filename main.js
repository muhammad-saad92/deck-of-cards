let deckId = '';

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
.then(res => res.json())
.then(data => {
    console.log(data)
    deckId = data.deck_id;
    console.log(deckId);
})
.catch(err => {
    console.log(`Error: ${err}`)
})

document.querySelector('button').addEventListener('click',drawTwo)

function drawTwo(){
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`error: ${err}`)
    })
}


