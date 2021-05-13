import React from 'react';
import { StyleSheet, Text, View, Platform, FlatList, TouchableHighlight, TouchableOpacity} from 'react-native';

import { Swipeable } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 
function ShoppingList({items, checkItem}) {
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={items}
                renderItem={({item})=>(
                    <Swipeable renderRightActions={()=><View style={styles.checkItem}><AntDesign name="checkcircleo" size={50} color="white"  onPress={()=>checkItem(item)}/></View>}>
                        <TouchableHighlight onPress={()=>console.log('hi')}>
                            <View style={styles.listItem}>
                                <Text style={!item.check? styles.itemText: styles.strikethrough}>{item.name}</Text>
                            </View>
                        </TouchableHighlight>

                    </Swipeable>
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
    },
    checkItem:{
        backgroundColor: "green",
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default ShoppingList;