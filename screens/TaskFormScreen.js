import React, { useState, useEffect } from 'react'
import { TouchableOpacity, TextInput, StyleSheet, Text } from 'react-native'

import Layout from '../components/Layout'
import { saveTask, getTask, updateTask } from '../api'

const TaskFormScreen = ({ navigation, route }) => {

  const [task, setTask] = useState({
    title: '',
    description: ''
  })

  const [editing, setEditing] = useState(false)

  const handlerChange = (name, value) => {setTask({ ...task, [name]: value })}

  const handlerSubmit = async () => {
    try {
      if (!editing) {
        await saveTask(task)
      } else {
        await updateTask(route.params.id, task)
      }
      navigation.navigate('HomeScreen')
    } catch (error) {
      console.error(error)
    }
  }

  useEffect( () => {
    if (route.params && route.params.id) {
      navigation.setOptions({ headerTitle: 'Atualizar Tarefa' })

      setEditing(true)

      const task = async () => {
        const res = await getTask(route.params.id)
        setTask({ title: res.title, description: res.description })
      }

      task()
    }
  }, [])

  return (
    <Layout>
      <TextInput style={styles.input}
        placeholder='Dígite o texto'
        placeholderTextColor='#546574'
        onChangeText={(text) => handlerChange('title', text)}
        value={ task.title }
      />
      <TextInput style={styles.input}
        placeholder='Dígite a descrição'
        placeholderTextColor='#546574'
        onChangeText={(text) => handlerChange('description', text)}
        value={ task.description }
      />

      {
        !editing ? (
          <TouchableOpacity style={styles.buttonSave} onPress={handlerSubmit}>
            <Text style={styles.buttonText}>
              Salvar Tarefa
            </Text>
          </TouchableOpacity>
        ): (
          <TouchableOpacity style={styles.buttonUpdate} onPress={handlerSubmit}>
            <Text style={styles.buttonText}>
              Editar Tarefa
            </Text>
          </TouchableOpacity>
        )
      }
    </Layout>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 50,
    color: '#fff',
    marginBottom: 7,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#10ac84',
    borderRadius: 5,
    textAlign: 'center',
    padding: 8
  },
  buttonSave: {
    width: '90%',
    height: 50,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: '#10ac84',
    alignItems: 'center',
  },
  buttonUpdate: {
    width: '90%',
    height: 50,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: '#e58e26',
    alignItems: 'center',
  },
  buttonText: { 
    color: '#fff', 
    textAlign: 'center', 
    fontSize: 18, 
    fontWeight: 'bold' 
  }
})

export default TaskFormScreen