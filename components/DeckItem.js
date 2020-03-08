import React from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View
} from 'react-native'
import { appMainColor, buttonBgColor } from '../utils/color'

export default function DeckItem({ id, name, cardCount, navigation }) {
    return (
        <View style={{ padding: 5 }}>
            <TouchableOpacity
                style={styles.container}
                onPress={() =>navigation.navigate('DeckDetail', { deckId: id, name: name })}>
                <Text style={styles.name}> {name} </Text>
                <Text style={styles.count}> {` ${cardCount} `} Card </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        backgroundColor: buttonBgColor,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 5,
        shadowOpacity: 1,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 4,
            height: 5
        }
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        color: appMainColor
    },
    count: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 5
    }
})
