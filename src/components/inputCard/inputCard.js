import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React , { useState }from 'react'

import styles from './inputCard.styles'

const inputCard = ({onPress}) => {
    const [text,setText] = useState("");
    const changeText = (txt) => {
        setText(txt)
      }
  return (
    <View style={styles.inputContainer}>
        <TextInput onChangeText={changeText} style={styles.textInput}></TextInput>
        <TouchableOpacity onPress={() => onPress(text)} style={styles.touchableContainer}>
        <Text style={styles.touchableText}>Kaydet</Text>
        </TouchableOpacity>
    </View>
  )
}

export default inputCard