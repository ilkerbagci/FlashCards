import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { white, appMainColor, buttonBgColor } from '../utils/color'

export default function QuizResults({
    correctAnswerCount,
    incorrectAnswerCount,
    restartQuiz,
    navigation
}) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Score : </Text>
            <Text style={styles.result}>{`${Math.round(
                (correctAnswerCount * 100) / (correctAnswerCount + incorrectAnswerCount)
            )} %`}</Text>
            <View style={{marginTop: 50}}>
                <TouchableOpacity onPress={() => restartQuiz()} style={[styles.button, { backgroundColor: 'orange' }]}>
                    <Text style={[styles.buttonText, { color: buttonBgColor }]}> Restart Quiz </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
                    <Text style={styles.buttonText}> Back to Deck </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: white
    },
    header: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    result: {
        fontSize: 70,
        color: appMainColor,
        textAlign: 'center'
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 5,
        fontWeight: '600'
    },
    button: {
        borderRadius: 15,
        backgroundColor: buttonBgColor,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        padding: 15,
        shadowRadius: 5,
        shadowOpacity: 1,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 4,
            height: 5
        }
    }
})
