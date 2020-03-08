import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'
import { white } from '../utils/color'
import QuizCard from './QuizCard'
import QuizResults from './QuizResults'
import QuizAnswer from './QuizAnswer'
import {
    clearLocalNotification,
    setLocalNotification
} from '../utils/helper'

const defaultState = {
    correctAnswerCount: 0,
    incorrectAnswerCount: 0,
    currentQuestionIndex: 0,
    showResults: false
}

class Quiz extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.getParam('deck').name} Quiz`
    })

    state = defaultState

    remainingCountMessage = () => {
        const { correctAnswerCount, incorrectAnswerCount } = this.state
        const remainingQuestions =
            this.deck().cards.length -
            (correctAnswerCount + incorrectAnswerCount + 1)
        return `Questions remaining : ${remainingQuestions}`
    }

    deck = () => {
        return this.props.navigation.getParam('deck')
    }

    restartQuiz = () => {
        this.setState(defaultState)
    }

    recordAnswer = knewAnswer => {
        let {
            correctAnswerCount,
            incorrectAnswerCount,
            showResults,
            currentQuestionIndex
        } = this.state

        if (knewAnswer) {
            correctAnswerCount++
        } else {
            incorrectAnswerCount++
        }

        const deck = this.deck()
        if (currentQuestionIndex === deck.cards.length - 1) {
            showResults = true

            clearLocalNotification()
            setLocalNotification()
        } else {
            currentQuestionIndex++
        }

        this.setState(state => ({
            correctAnswerCount,
            incorrectAnswerCount,
            showResults,
            currentQuestionIndex
        }))
    }

    render() {
        const {
            correctAnswerCount,
            incorrectAnswerCount,
            currentQuestionIndex,
            showResults
        } = this.state

        return !showResults ? (
            <View style={styles.container}>
                <QuizCard card={this.deck().cards[currentQuestionIndex]} />
                <Text style={styles.count}>{this.remainingCountMessage()}</Text>
                <QuizAnswer recordAnswer={this.recordAnswer} />
            </View>
        ) : (
                <QuizResults
                    correctAnswerCount={correctAnswerCount}
                    incorrectAnswerCount={incorrectAnswerCount}
                    restartQuiz={this.restartQuiz}
                    navigation={this.props.navigation}
                />
            )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: white,
        padding: 10
    },
    count: {
        fontSize: 20,
        marginTop: 10
    }
})

export default Quiz
