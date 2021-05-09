import React from 'react';
import { StyleSheet, Text, View, Platform} from 'react-native';

function ShoppingList(props) {
    return (
        <View style={styles.listContainer}>
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer:{
        backgroundColor: 'purple',
        width: '100%',
        height: '100%'
    }
})

export default ShoppingList;