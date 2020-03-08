import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { correctAnswerColor, incorrectAnswerColor, white } from '../utils/color'

export default function QuizAnswer({ recordAnswer }) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Answer?</Text>
            <View style={styles.answers}>
                <TouchableOpacity style={[styles.answerButton, { backgroundColor: correctAnswerColor }]} onPress={() => recordAnswer(true)}>
                    <Text style={styles.answerButtonText}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.answerButton, { backgroundColor: incorrectAnswerColor}]} onPress={() => recordAnswer(false)}>
                    <Text style={styles.answerButtonText}>Incorrect</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    answers: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    answerButton: {
        padding: 20,
        margin: 10,
        width: 150,
        borderRadius: 15,
        shadowRadius: 5,
        shadowOpacity: 1,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 4,
            height: 5
        }
    },
    answerButtonText: {
        color: white,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
})
