import React from 'react';
import { StyleSheet, Text, View, Platform, FlatList, TouchableHighlight, TouchableOpacity} from 'react-native';

function ShoppingList({items}) {
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={items}
                renderItem={({item})=>(
                    <TouchableHighlight onPress={()=>console.log("hi")}>
                        <View style={styles.listItem}>
                            <Text style={!item.check? styles.itemText: styles.strikethrough}>{item.name}</Text>
                        </View>
                    </TouchableHighlight>
                )}
                ItemSeparatorComponent={()=> <View style={{width: '100%', height: 3, backgroundColor: '#636363'}}/>}
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
        fontSize: 32,
        textTransform: 'capitalize'
    },
    strikethrough:{
        color: '#8aab90',
        fontSize: 32,
        textTransform: 'capitalize',
        textDecorationLine: 'line-through', 
        
    }
})

export default ShoppingList;