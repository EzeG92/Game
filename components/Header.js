import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors'
import Font from '../constants/Font'
import { useFonts } from 'expo-font'


const Header = ({ title}) => {
    const [loaded] = useFonts({
        Roboto: require('../assets/fonts/Roboto-Bold.ttf')
    })

    if (!loaded) {
        return null
    }

    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.secondary,
        height: 90,
        paddingTop: 36,
        alignItems: "center",
        justifyContent: "center",
    },

    headerTitle: {
        textTransform: 'uppercase',
        fontSize: Font.primary,
        fontFamily: 'Roboto'
    }
})