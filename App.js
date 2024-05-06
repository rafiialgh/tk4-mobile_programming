import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'

import LoginScreen from './screens/LoginScreen'
import AppNavigation from './navigation/AppNavigation'

export default function App() {
  return (
      <AppNavigation />

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
