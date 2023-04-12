import {Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'

import TodoCard from './components/todoCard'
import InputCard from './components/inputCard'

const App = () => {

  const [id,setId] = useState(0);
  const [list, setList] = useState([]);

const changeText = (txt) => {
  setText(txt)
}

const changeList = (text) => {
  if(text == "") {
    alert("Lütfen boş bırakmayınız...")
  } else {
    setList([...list,{id:id,text: text, isDone: false}]);
    setId(id+1);
  }
}

const updateList = (itemId) => {
  const newList = [];
  list.forEach(item => {
    if(item.id == itemId)
    {
      item.isDone = !item.isDone;
    }
    newList.push(item);
  });
  setList(newList);
}

const deleteList = (itemId) => {
  const newList = list.filter(item => item.id != itemId);
  setList(newList);
}


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      ListHeaderComponent={() => <View style={styles.titleContainer}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.title}>{(list.filter(f => f.isDone === false).length)}</Text>
      </View>}
      data={list}
      renderItem={({item}) => <TodoCard item={item} isUpdate={updateList} isDelete={deleteList} /> }
      />
      <InputCard onPress={changeList} />

    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#0D0C3080"
  },
  text:{
    color:"red"
  },
  title:{
    fontWeight: "bold",
    fontSize: 40,
    color:"#FFA500",
  },
  titleContainer:{
    margin: 40,
    flexDirection: "row",
    justifyContent: "space-between"
  },
})