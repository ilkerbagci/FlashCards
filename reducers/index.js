import {
    ADD_DECK,
    GET_ALL_DECKS,
    GET_DECK,
    ADD_CARD
} from '../actions/index';

export default function decks(state = {}, action) {
    switch (action.type) {
        case ADD_DECK:
            return {
                ...state,
                [action.id]: {
                    id: action.id,
                    name: action.name,
                    cards: []
                }
            };
        case GET_ALL_DECKS:
            return {
                ...state,
                ...action.decks
            };
        case GET_DECK:
            return {
                ...state,
                ...action.deck
            };
        case ADD_CARD:
            return {
                ...state,
                [action.deckId]: {
                    ...state[action.deckId],
                    cards: [
                        ...state[action.deckId].cards,
                        { question: action.question, answer: action.answer }
                    ]
                }
            };
        default:
            return state;
    }
}
