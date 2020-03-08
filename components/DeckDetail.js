import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { white, appMainColor, buttonBgColor } from '../utils/color'

class DeckDetail extends Component {

    render() {
        const { navigation, deck } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.deckName}> {deck.name} </Text>
                <Text style={styles.buttonText}> {` ${deck.cards.length} `} Card </Text>
                <TouchableOpacity onPress={() => navigation.navigate('AddCard', { deckId: deck.id })} style={styles.button}>
                    <Text style={styles.buttonText}> Add Card </Text>
                </TouchableOpacity>
                {deck.cards.length !== 0 && (
                    <TouchableOpacity onPress={() => navigation.navigate('Quiz', { deck })} style={styles.button}>
                        <Text style={styles.buttonText}> Start Quiz </Text>
                    </TouchableOpacity>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    deckName: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        color: appMainColor
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 5,
        fontWeight: '500'
    },
    button: {
        height: 50,
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

const mapStateToProps = (state, { navigation }) => ({
    deck: state[navigation.getParam('deckId')]
})

export default connect(
    mapStateToProps,
    null
)(DeckDetail)
