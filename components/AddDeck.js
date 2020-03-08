import React, { Component } from 'react'
import {
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback,
    View
} from 'react-native'
import { connect } from 'react-redux'
import { white, buttonBgColor } from '../utils/color'
import { generateId } from '../utils/helper'
import { addDeck } from '../actions'
import { saveDeck } from '../utils/api'

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

class AddDeck extends Component {
    state = {
        input: ''
    }

    onDeckTitleChanged = input => {
        this.setState(() => ({
            input
        }))
    }

    createDeck = () => ({
        id: generateId(),
        name: this.state.input,
        cards: []
    })

    onSubmit = () => {
        let deck = this.createDeck()

        this.props.addDeck(deck.id, deck.name)

        saveDeck(deck)

        this.props.navigation.navigate('DeckDetail', {
            deckId: deck.id,
            name: deck.name
        })

        this.setState(() => ({
            input: ''
        }))
    }

    render() {
        const { input } = this.state
        return (
            <DismissKeyboard>
                <View style={styles.container}>
                    <Text style={[styles.buttonText, {marginTop: 20, fontWeight: 'bold'}]}>Enter Title :</Text>
                    <TextInput
                        style={styles.textInput}
                        value={input}
                        placeholder='Deck Title'
                        onChangeText={this.onDeckTitleChanged}
                    />
                    <TouchableOpacity onPress={this.onSubmit} style={styles.button}>
                        <Text style={styles.buttonText}> Add Deck </Text>
                    </TouchableOpacity>
                </View>
            </DismissKeyboard>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    textInput: {
        backgroundColor: white,
        fontSize: 20,
        borderRadius: 15,
        margin: 10,
        padding: 10,
        fontWeight: '500',
        shadowRadius: 5,
        shadowOpacity: 1,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 4,
            height: 5
        }
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 5,
        fontWeight: '500'
    },
    button: {
        borderRadius: 15,
        backgroundColor: buttonBgColor,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        padding: 10,
        shadowRadius: 5,
        shadowOpacity: 1,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 4,
            height: 5
        }
    }
})

const mapDispatchToProps = dispatch => ({
    addDeck: (id, name) => dispatch(addDeck(id, name))
})

export default connect(
    null,
    mapDispatchToProps
)(AddDeck)
