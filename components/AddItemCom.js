import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
function AddItemComp({typeytype, btndisabled, addItem}) {
    const [text, onChangeText] = React.useState("")
    useEffect(()=>{
        typeytype(text)
    }, [text])
    return (
        <View style={styles.addContainer}>
            <TextInput style={styles.input}
            placeholder="Type Item"
            placeholderTextColor="white"
            onChangeText={onChangeText}
            value={text}/>
            {!btndisabled && text!=="" && <TouchableOpacity onPress={()=> {
                onChangeText("")
                addItem(text)
            }}>
                <View style={styles.addBTN}>
                    <Text style={styles.btnText}>Add</Text>
                </View>
            </TouchableOpacity>}
            {(btndisabled || text==="") && 
            <View style={styles.cantAddBTN}>
                <Text style={styles.btnText}>Add</Text>
            </View>}

        </View>
    );
}

const styles = StyleSheet.create({
    addContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "green",
        marginTop: 20
        
    },
    input:{
        height: 40,
        width: '70%',
        paddingLeft: 10,
        fontSize: 20,
        color: 'white'
    },
    addBTN:{
        width: 100,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    cantAddBTN:{
        width: 100,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText:{
        fontFamily: Platform.OS === 'ios' ? 'San Francisco' :'notoserif',
        color: 'white',
        textTransform:'uppercase'
    }
})
export default AddItemComp;