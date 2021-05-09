import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Platform, Modal} from 'react-native';
import ShoppingList from './components/ShoppingList'
import AddItemComp from './components/AddItemCom'
import EmptyListCom from './components/EmptyListCom'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons';


export default function App() {
  const [emptyModal, setOpenModal] = useState(false)
  return (
    <View style={styles.container}>
      <Modal 
      animationType="slide"
      visible={emptyModal}
      transparent={true}
      >
        <View style={styles.modalstyl}>
          <FontAwesome5 onPress={()=>setOpenModal(false)} name="backspace" size={60} color="white" style={styles.backbtn} />
          <Text  style={styles.modalText}>This will permanantely delete everything</Text>
          <Ionicons name="trash-bin" size={150} color="red" />
        </View>
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
    setOpenModal(true)
  }

  function emptyList(){
    console.log('emptying list')
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
  },
  modalView:{
    backgroundColor: 'blue'
  },  
  modalText:{
    color: 'red'
  },
  modalstyl:{
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backbtn:{
    position: 'absolute',
    top: 0,
    left: 10,
  }
});
