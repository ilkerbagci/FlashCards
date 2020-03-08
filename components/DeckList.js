import React, { Component } from 'react'
import {
    View,
    FlatList,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import DeckItem from './DeckItem'
import { retrieveDecks } from '../utils/api'
import { getAllDecks } from '../actions'
import { buttonBgColor } from '../utils/color'

class DeckList extends Component {
    
    state = {
        ready: false
    }

    componentDidMount() {
        retrieveDecks()
            .then(data => {
                this.props.getAllDecks(data)
            })
            .then(() =>
                this.setState(() => ({
                    ready: true
                }))
            )
    }

    render() {
        console.disableYellowBox = true

        const { DeckList, navigation } = this.props

        if (!this.state.ready) {
            return (
                <View style={styles.buttonText}>
                    <Text>Please wait...</Text>
                </View>
            )
        } else {
            return Object.values(DeckList).length > 0 ? (
                <View style={styles.container}>
                    <FlatList
                        data={Object.values(DeckList)}
                        renderItem={({ item }) => (
                            <DeckItem
                                id={item.id}
                                name={item.name}
                                cardCount={item.cards.length}
                                navigation={this.props.navigation}
                            />
                        )}
                        keyExtractor={(item, index) => item.name}
                    />
                </View>
            ) : (
                    <View style={styles.container}>
                        <Text style={styles.buttonText}>You haven't added any cards yet.</Text>
                        <TouchableOpacity onPress={() => { navigation.navigate('AddDeck') }} style={styles.button}>
                            <Text style={styles.buttonText}> Add Deck </Text>
                        </TouchableOpacity>
                    </View>
                )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
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
    getAllDecks: decks => dispatch(getAllDecks(decks))
})

const mapStateToProps = DeckList => ({ DeckList })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeckList)
