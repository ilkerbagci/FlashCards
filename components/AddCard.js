import React, { Component } from 'react'
import {
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native'
import { connect } from 'react-redux'
import { white, buttonBgColor } from '../utils/color'
import { addCard } from '../actions'
import { saveCard } from '../utils/api'

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

class AddCard extends Component {
    state = {
        question: '',
        answer: ''
    }

    onSubmit = () => {
        let deckId = this.props.navigation.getParam('deckId')
        const { question, answer } = this.state

        this.props.addCard(deckId, question, answer)
        saveCard(deckId, { question, answer })

        this.props.navigation.goBack()

        this.setState({
            question: '',
            answer: ''
        })
    }

    render() {
        const { question, answer } = this.state
        return (
            <DismissKeyboard>
                <View style={styles.container}>
                    <TextInput
                        placeholder='Question'
                        style={styles.textInput}
                        value={question}
                        onChangeText={question => this.setState({ question })}
                    />
                    <TextInput
                        placeholder='Answer'
                        style={styles.textInput}
                        value={answer}
                        onChangeText={answer => this.setState({ answer })}
                    />
                    <TouchableOpacity onPress={this.onSubmit} style={styles.button}>
                        <Text style={styles.buttonText}> Add Card </Text>
                    </TouchableOpacity>
                </View>
            </DismissKeyboard>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    textInput: {
        backgroundColor: white,
        fontSize: 20,
        height: 80,
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
        height: 60,
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
    addCard: (deckId, question, answer) =>
        dispatch(addCard(deckId, question, answer))
})

export default connect(
    null,
    mapDispatchToProps
)(AddCard)
