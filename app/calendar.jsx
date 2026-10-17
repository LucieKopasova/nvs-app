import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useColors } from '../constants/theme'

const calendar = () => {
  const styles = getStyles(useColors())
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kalendář</Text>
    </View>
  )
}

export default calendar

const getStyles = (palette) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    title: {
      fontFamily: 'NunitoSans_700Bold',
      fontSize: 26,
      color: palette.text,
      alignSelf: 'flex-start',
    },
  })
