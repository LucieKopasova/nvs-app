import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const calendar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kalendář</Text>

      <Link href='/home' style={styles.link}>Zpět</Link>
    </View>
  )
}

export default calendar

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  paddingHorizontal: 20,
},
title: {
    fontFamily: 'NunitoSans_700Bold',
    fontSize: 26,
    color: '#303F49',
    alignSelf: 'flex-start'
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
    alignSelf: 'flex-end'
  }
})
