import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'

import styles from './todoCard.styles'

const todoCard = ({item , isUpdate, isDelete}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => isUpdate(item.id)} onLongPress={() => isDelete(item.id)} >
      {item.isDone ? 
        <View style={styles.doneContainer}>
          <Text style={styles.textDone}>{item.text}</Text>
          <Text style={styles.textDone}>yapıldı</Text>
        </View>
      : <Text style={styles.textUnDone}>{item.text}</Text>
      }
    </TouchableOpacity>
  )
}

export default todoCard