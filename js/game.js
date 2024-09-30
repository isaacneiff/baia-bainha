const grid = document.querySelector('.grid')

const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'summer',
    'meeseeks',
    'scroopy',
]

const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className
    return element
}

let firstCard = ''
let secondCard = ''

const checkCards = () => {

}

const revealCard = ({ target }) => {

    if (target.parentNode.classList.includes('reveal-card')) {

        return
    }

    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card')
        firstCard = target.parentNode

    }
    else if (secondCard === '') {

        target.parentNode.classList.add('reveal-card')
        secondCard = target.parentNode

        checkCards


    }


}


const createCard = (characters) => {

    const card = createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')

    front.style.backgroundImage = `url('../assets/${characters}.png')`

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revealCard)

    return card
}

const loadGame = () => {
    const duplicateCharacters = [...characters, ...characters]

    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5)

    shuffledArray.forEach((characters) => {

        const card = createCard(characters)
        grid.appendChild(card)

    })

}

loadGame()

