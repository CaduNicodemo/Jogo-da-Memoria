document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [{
            name: 'leao',
            img: 'img/leao.png'
        },
        {
            name: 'leao',
            img: 'img/lion.png'
        },
        {
            name: 'macaco',
            img: 'img/macaco.png'
        },
        {
            name: 'macaco',
            img: 'img/monkey.png'
        },
        {
            name: 'sapo',
            img: 'img/sapo.png'
        },
        {
            name: 'sapo',
            img: 'img/frog.png'
        },
        {
            name: 'gato',
            img: 'img/gato.png'
        },
        {
            name: 'gato',
            img: 'img/cat.png'
        },
        {
            name: 'lobo',
            img: 'img/lobo.png'
        },
        {
            name: 'lobo',
            img: 'img/wolf.png'
        },
        {
            name: 'raposa',
            img: 'img/raposa.png'
        },
        {
            name: 'raposa',
            img: 'img/fox.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'img/verso.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'img/verso.png')
            cards[optionTwoId].setAttribute('src', 'img/verso.png')
        } else if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute('src', 'img/blank.png')
            cards[optionTwoId].setAttribute('src', 'img/blank.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'img/verso.png')
            cards[optionTwoId].setAttribute('src', 'img/verso.png')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Parabéns! Você achou todos!'
        }
    }

    //flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 700)
        }
    }

    createBoard()
})