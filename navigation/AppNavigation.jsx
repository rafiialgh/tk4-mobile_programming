import React, {useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import LoginScreen from '../screens/LoginScreen'
import MapScreen from '../screens/MapScreen'

export default function AppNavigation() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Map' component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}