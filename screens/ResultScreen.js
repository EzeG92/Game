import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import win from '../assets/win.jpg'
import lose from '../assets/gameover.png'


const ResultScreen = ({ result }) => {
    const [image, setImage] = useState('')

    useEffect(() => {
        handleImage()
    }, []) //va a correr cada vez que el componente de renderize


    const handleImage = () => {
        if (result === 'felicitaciones') {
            setImage(win);
            return;
        }
        setImage(lose)
    }

    return (
        <View style={styles.container}>
            <Card>
                <Text style={{fontSize: 18, textTransform: 'uppercase'}}>{result}</Text>
            </Card>
            <Image
                style={styles.imageContainer}
                source={image}
            />
        </View>
    )
}

export default ResultScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageContainer: {
        marginTop: 50,
    }
})