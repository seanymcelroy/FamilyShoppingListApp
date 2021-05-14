import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Platform, Modal, TouchableOpacity} from 'react-native';
import ShoppingList from './components/ShoppingList'
import AddItemComp from './components/AddItemCom'
import EmptyListCom from './components/EmptyListCom'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons';


export default function App() {
  const [emptyModal, setOpenModal] = useState(false)
  const [items,setItems]=useState([{name: 'bread', check: false},
  {name: 'supervalu popcorn', check: false},
  {name: 'toast', check: true},
  {name: 'poptart', check: false}])
  const [showedItems,setShowingItems]=useState(items)
  useEffect(() => {
    const list=alphabetizeList(items)
    setItems(list)
  }, [])

  const [addDisabled, setAddDisabled]= useState(false)


  return (
    <View style={styles.container}>
      <Modal 
      visible={emptyModal}
      transparent={true}
      >
        <View style={styles.modalstyl}>
          
          <FontAwesome5 onPress={()=>setOpenModal(false)} name="backspace" size={60} color="white" style={styles.backbtn} />
          <Text  style={styles.modalText}>This will permanantely delete checked items</Text>
          <TouchableOpacity>
            <Ionicons name="trash-bin" size={150} color="red" />
          </TouchableOpacity>
        </View>
      </Modal>
      <Text style={styles.heading}>McShopping List</Text>
      <AddItemComp typeytype={typing} btndisabled={addDisabled} addItem={addItem}/>
      <View style={styles.shopListContainer}>
        <ShoppingList items={showedItems} checkItem={checkItem} deleteItem={deleteItem} refresh={refresh}/>
      </View>
      <StatusBar style="auto" />
      <EmptyListCom passedStyle={styles.emptyListBTN} openModal={openCloseModal}/>
    </View>
    
  );

  function refresh(){
    let freshList=alphabetizeList([...showedItems])
    setShowingItems(freshList)
  }

  function openCloseModal(){
    setOpenModal(true)
  }

  function emptyList(){
    console.log('emptying list')
  }

  function deleteItem(name){
    console.log(name)
    let eyetems=[...items]
    let nuItems= eyetems.filter((item)=>item.name!=name)
    console.log(nuItems)
    setItems(nuItems)
    let eyetems2=[...showedItems]
    let nuItems2= eyetems2.filter((item)=>item.name!=name)
    setShowingItems(nuItems2)
  }
  
  function checkItem(itm){
    let eyetems= [...items]
    for (let i=0; i<eyetems.length;i++){
      if (eyetems[i].name===itm.name){
        itm.check=(!itm.check)
        eyetems[i]=itm
      }
    }
    setItems(eyetems)
    console.log("hs")
    
  }

  function addItem(food){
    let nuevo_array=[{name: food.toLowerCase(), check:false},...items]
    setItems(nuevo_array)
  }

  function alphabetizeList(list){
    console.log("Alphabetize")
    list.sort((a,b)=> a.name>b.name? 1: -1)
    return list
  }

  function typing(str){
    str=str.toLowerCase()
    if (str==="") setShowingItems(items)
    else{
      const itm_list=items
      let updated_list=itm_list.filter((item)=> {          
        return item.name.toLowerCase().startsWith(str)
      })
      if (updated_list.length>0 && updated_list[0].name===str){
        setAddDisabled(true)
      }else{
        setAddDisabled(false)
      }
      setShowingItems(updated_list)

    }
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
    marginTop: 50,
    width: '100%',
    height: '60%'
  },
  emptyListBTN:{
    marginTop: 40,
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
