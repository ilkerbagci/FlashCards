export const ADD_DECK = 'ADD_DECK'
export const GET_ALL_DECKS = 'GET_ALL_DECKS'
export const GET_DECK = 'GET_DECK'
export const ADD_CARD = 'ADD_CARD'

export function addDeck(id, name) {
    return {
        type: ADD_DECK,
        id,
        name
    }
}

export function getAllDecks(decks) {
    return {
        type: GET_ALL_DECKS,
        decks
    }
}

export function getDeck(deck) {
    return {
        type: GET_DECK,
        deck
    }
}

export function addCard(deckId, question, answer) {
    return {
        type: ADD_CARD,
        deckId,
        question,
        answer
    }
}
