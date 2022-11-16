import { StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'

const width = Dimensions.get('window').width //obtiene el ancho total del dispositivo 
const height = Dimensions.get('window').height //obtiene el alto total del dispositivo

const Card = ({children, newStyles}) => {
    return (
        <View style={{...styles.inputContainer, ...newStyles}}>{children}</View>
    )
}

export default Card

const styles = StyleSheet.create({
    inputContainer: {
        width: width/1.2,  //podes usar con % o con alguna operacion partiendo del ancho total
        maxWidth: 400, //es el ancho maximo que puede tener si es que el 80% por ejemplo lo supera
        minWidth: 100,
        padding: 20,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height:2},
        shadowRadius: 6,
        shadowOpacity: 0.5,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white'
    },
})