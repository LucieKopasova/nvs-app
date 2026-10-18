import { StyleSheet } from 'react-native'
import React from 'react'

//themed components
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const NotesScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} title={true}>
        Poznámky
      </ThemedText>
    </ThemedView>
  )
}

export default NotesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'NunitoSans_700Bold',
    fontSize: 26,
    alignSelf: 'flex-start',
  },
})
