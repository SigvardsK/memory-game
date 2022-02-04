document.addEventListener('DOMContentLoaded', () => {

    // card options
    const cardArray = [
        {
            name: 'Danilans',
            img: 'images/Danilans.png'

        },
        {
            name: 'Danilans',
            img: 'images/Danilans.png'

        },
        {
            name: 'tofiks',
            img: 'images/tofiks.png'

        },
        {
            name: 'tofiks',
            img: 'images/tofiks.png'

        },
        {
            name: 'vaira',
            img: 'images/vaira.png'

        },
        {
            name: 'vaira',
            img: 'images/vaira.png'

        },
        {
            name: 'kakis',
            img: 'images/kakis.png'

        },
        {
            name: 'kakis',
            img: 'images/kakis.png'

        },
        {
            name: 'saule',
            img: 'images/saule.png'

        },
        {
            name: 'saule',
            img: 'images/saule.png'

        },
        {
            name: 'laima',
            img: 'images/laima.png'

        },
        {
            name: 'laima',
            img: 'images/laima.png'

        },
    ]

    cardArray.sort (() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = [] 


    // create game board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blue.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    // check for matches
    function checkForMatch () {
        let cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTWoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTWoId].setAttribute('src', 'īmages/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blue.png')
            cards[optionTWoId].setAttribute('src', 'images/blue.png')
            alert('Sorry, try again!')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray/2) {
            resultDisplay.textContent = 'Congratulations! You won!'
        }
    }

    // flip card
    function flipcard () {
        let cardId = this.getAttribute ('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src',cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    } 

     createBoard()


})