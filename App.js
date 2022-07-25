import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Text } from 'react-native';

import HomeScreen from "./screens/HomeScreen";
import TaskFormScreen from "./screens/TaskFormScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeScreen"
          component={ HomeScreen }
          options={({ navigation }) => ({ 
            title: 'Tarefas',
            headerStyle: { backgroundColor: '#222f3e' },
            headerTitleStyle: { color: '#fff' },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('TaskFormScreen')}>
                <Text style={{ color: '#fff', marginRight: 20, fontSize: 15, fontWeight: 'bold' }}>
                  Nova
                </Text>
              </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen 
          name="TaskFormScreen"
          component={ TaskFormScreen }
          options={{
            title: 'Criar Tarefa',
            headerStyle: { backgroundColor: '#222f3e' },
            headerTitleStyle: { color: '#fff' },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;