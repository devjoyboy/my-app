import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const TaskItem = ({ task, handlerDelete }) => {

  const navigation = useNavigation()

  return (
    <View style={ styles.itemContainer }>
      <TouchableOpacity onPress={ () => navigation.navigate('TaskFormScreen', { id: task.id }) }>
        <Text style={ styles.itemTitle }>
          { task.title }
        </Text>
        <Text style={ styles.itemDescription }>
          { task.description }
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={ styles.itemButton }>
        <Text 
          style={ styles.itemText }
          onPress={() => handlerDelete(task.id)}
        >
          Excluir
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#333333',
        padding: 20,
        marginVertical: 8,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    itemDescription: {
        color: '#fff',
    },
    itemButton: {
      backgroundColor: '#ee5253',
      padding: 10,
      borderRadius: 5,
    },
    itemText: {
      color: '#fff',
      fontWeight: 'bold',
    }
})

export default TaskItem