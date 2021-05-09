import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

function EmptyListCom({passedStyle, openModal}) {
    return (
        <TouchableOpacity onPress={openModal}>
            <View style={[styles.emptyBasketButton, passedStyle]}>
                <Text style={styles.btnText}>Empty Basket</Text>
            </View>

        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    emptyBasketButton:{
        width: '100%',
        backgroundColor: 'red',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    btnText:{
        fontFamily: Platform.OS === 'ios' ? 'San Francisco' :'notoserif',
        color: 'white',
        textTransform:'uppercase'
    }
})

export default EmptyListCom;