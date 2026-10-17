import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { colors, fonts, spacing, radius } from '../constants/theme'

const Done = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hotovo</Text>

      <Link href='/calendar' asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Dále</Text>
        </Pressable>
      </Link>
    </View>
  )
}

export default Done

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 34,
    color: colors.text,
    textAlign: 'center',
  },
  button: {
    minHeight: 56,
    marginTop: spacing.lg,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.pill,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: colors.onPrimary,
  },
})
