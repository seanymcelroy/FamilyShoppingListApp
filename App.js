import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Platform, Modal} from 'react-native';
import ShoppingList from './components/ShoppingList'
import AddItemComp from './components/AddItemCom'
import EmptyListCom from './components/EmptyListCom'

export default function App() {
  const [emptyModal, setOpenModal] = useState(false)
  return (
    <View style={styles.container}>
      <Modal visible={emptyModal}>

      </Modal>
      <Text style={styles.heading}>McElroy Shopping List</Text>
      <AddItemComp/>
      <View style={styles.shopListContainer}>
        <ShoppingList/>
      </View>
      <StatusBar style="auto" />
      <EmptyListCom passedStyle={styles.emptyListBTN} openModal={openCloseModal}/>
    </View>
    
  );

  function openCloseModal(){
    console.log("Opening modl")
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 5
  },
  heading:{
    marginTop: 35,
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'San Francisco' :'notoserif',
    color: 'white'
  },
  shopListContainer:{
    marginTop: 40,
    width: '100%',
    height: '60%'
  },
  emptyListBTN:{
    marginTop: 20,
    width: '50%'
  }
});
