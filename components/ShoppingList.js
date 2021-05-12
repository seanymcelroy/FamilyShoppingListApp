import React from 'react';
import { StyleSheet, Text, View, Platform, FlatList} from 'react-native';

function ShoppingList({items}) {
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={items}
                renderItem={({item})=>(
                    <View style={styles.listItem}>
                        <Text style={!item.check? styles.itemText: styles.strikethrough}>{item.name}</Text>
                    </View>
                )}
                
            />
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer:{
        backgroundColor: '#121212' ,
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    listItem:{
        padding: 25
    },
    itemText:{
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    strikethrough:{
        color: '#8aab90',
        fontSize: 36,
        textTransform: 'capitalize',
        textDecorationLine: 'line-through', 
        
    }
})

export default ShoppingList;