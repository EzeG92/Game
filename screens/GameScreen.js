import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native'
import Card from '../components/Card';
import Colors from '../constants/Colors'
import Font from '../constants/Font'
import { useFonts } from 'expo-font'

const GameScreen = () => {

    const [loaded] = useFonts({
        Roboto: require('../assets/fonts/Roboto-Bold.ttf')
    })

    const [currentGuess, setCurrentGuess] = useState();


    useEffect(() => {
        setCurrentGuess(Math.floor(Math.random() * (100 - 1) + 1));
    }, []);

    if (!loaded) {
        return null
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>La suposicion del oponente</Text>
            <Text style={styles.text}>{currentGuess}</Text>
            <Card newStyles={styles.buttonContainer}>
                <Pressable
                    style={styles.buttons}>
                    <Text style={styles.text}>Menor</Text>
                </Pressable>
                <Pressable
                    style={styles.buttons}>
                    <Text style={styles.text}>Mayor</Text>
                </Pressable>
            </Card>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        marginTop: 50,
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: 300,
    },

    buttons: {
        backgroundColor: Colors.primary,
        height: 35,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },

    text: {
        fontFamily: 'Roboto',
        fontSize: Font.secondary,
    },
})