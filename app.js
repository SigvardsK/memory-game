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

    const grid = document.querySelector('.grid')

    // create game board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blue.png')
            card.setAttribute('data-id', i)
            // card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    // check for matches


    // flip card

    createBoard()


})