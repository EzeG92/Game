import { Pressable, StyleSheet, Text, TouchableWithoutFeedback, View, Keyboard, Dimensions,} from 'react-native'
import { useState } from 'react'
import Card from '../components/Card'
import Colors from '../constants/Colors'
import Font from '../constants/Font'
import Input from '../components/Input'
import { useFonts } from 'expo-font'


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const StarGamesScreen = ({onStartGame}) => {
    const [loaded] = useFonts({
        Roboto: require('../assets/fonts/Roboto-Bold.ttf')
    })

    const [value, setValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('')

    const handleConfirmation = () => {
        const choseNumber = parseInt(value)
        if (choseNumber === NaN || choseNumber <= 0 || choseNumber > 99) return

        setConfirmed(true)
        setSelectedNumber(choseNumber)
        setValue('')
    }

    const handleResetInput = () => {
        setValue('')
        setConfirmed(false)
    }



    const handleInput = (text) => {
        setValue(text.replace(/[^0-9]/g, "")) //validacion lo que no sea del 0 al 9 convierta a string vacio
    }

    if (!loaded) {
        return null
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Card>
                    <Text style={styles.text}>Elije un numero</Text>
                    <Input value={value} onChangeText={handleInput} style={styles.text} />
                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.cleanButton} onPress={handleResetInput}>
                            <Text style={styles.text}>Limpiar</Text>
                        </Pressable>
                        <Pressable
                            style={{ ...styles.cleanButton, backgroundColor: Colors.secondary, width: '40%', }}
                            onPress={handleConfirmation}>
                            <Text style={styles.text}>Confirmar</Text>
                        </Pressable>
                    </View>
                </Card>
                {confirmed && (
                    <Card newStyles={{ marginTop: 30, width: '60%',}}>
                        <Text style={styles.text}>Tu numero</Text>
                        <Text style={styles.text}>{selectedNumber}</Text>
                        <Pressable
                            style={{ ...styles.cleanButton, backgroundColor: Colors.secondary, width: '90%', marginTop: 20,}}
                            onPress={() => onStartGame(selectedNumber)}>
                            <Text style={styles.text}>Empezar Juego</Text>
                        </Pressable>
                    </Card>
                )}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StarGamesScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        marginTop: 50,
    },

    text: {
        fontFamily: 'Roboto',
        fontSize: Font.secondary,
    },

    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },

    cleanButton: {
        backgroundColor: Colors.primary,
        height: 35,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginTop: 10,
    },
})