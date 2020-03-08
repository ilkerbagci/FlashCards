import { AsyncStorage } from 'react-native'

export const FLASHCARD_STORAGE_KEY = 'FLASHCARD_STORAGE'

export const saveDeck = deck => {
    return AsyncStorage.mergeItem(
        FLASHCARD_STORAGE_KEY,
        JSON.stringify({ [deck.id]: deck })
    )
}

export const retrieveDecks = () => {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(result => {
        const data = JSON.parse(result)
        return data
    })
}

export const clear = () => {
    return AsyncStorage.clear()
}

export const saveCard = (deckId, card) => {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(results => {
        const data = JSON.parse(results)

        data[deckId] = {
            ...data[deckId],
            cards: [
                ...data[deckId].cards,
                { question: card.question, answer: card.answer }
            ]
        }
        AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data))
    })
}
