import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { white, appMainColor, buttonBgColor } from '../utils/color'

class QuizCard extends Component {
    state = {
        showQuestion: true
    }

    toggleQuestion = () => {
        this.setState(state => ({
            showQuestion: !state.showQuestion
        }))
    }

    render() {
        const { showQuestion } = this.state
        const { card } = this.props
        return (
            <View style={styles.container}>
                <View>
                    {this.state.showQuestion ?
                        (<Text style={styles.text}>{card.question}</Text>)
                        : (<Text style={styles.text}>{card.answer}</Text>)
                    }
                    <TouchableOpacity onPress={this.toggleQuestion} style={styles.button}>
                        <Text style={styles.buttonText}>
                            {`Show ${showQuestion ? 'Answer' : 'Question'}`}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: white,
        width: 350,
        height: 250
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: appMainColor
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
        padding: 15,
        width: 300,
        shadowRadius: 5,
        shadowOpacity: 1,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 4,
            height: 5
        }
    }
})

export default QuizCard
