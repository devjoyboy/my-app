import React from 'react'
import { View, StyleSheet, StatusBar  } from 'react-native'

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#222f3e' />
        { children }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222f3e',
        padding: 20,
        alignItems: 'center',
    }
})

export default Layout