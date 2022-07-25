import React, { useState, useEffect} from 'react'
import { FlatList, RefreshControl } from 'react-native'

import TaskItem from './TaskItem'
import { getTasks, deleteTask } from '../api'
import { useIsFocused } from '@react-navigation/native'

const TaskList = () => {

  const [tasks, setTasks] = useState([])
  const [refreshing, setRefreshing] = useState(false)

  const isFocused = useIsFocused()

  const loadTask = async () => {
      const data = await getTasks()
      setTasks(data)
  }

  useEffect(() => {
    loadTask()
  }, [isFocused])

  const handlerDelete = async (id) => {
    await deleteTask(id)
    await loadTask()
  }

  const renderItem = ({ item }) => {
    return (
      <TaskItem task={ item } handlerDelete={ handlerDelete } />
    )
  }

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true)
    await loadTask()
    setRefreshing(false)
  })

  return (
    <FlatList
        style={{ width: '100%' }}
        data={ tasks }
        keyExtractor={( item ) => item.id + ''}
        renderItem={ renderItem }
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            colors={['#75e08f']}
            onRefresh={ onRefresh }
            progressBackgroundColor='#0a3d62'
          />
        }
    />
  )
}

export default TaskList