import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useColors, fonts, spacing, radius } from '../constants/theme'

const Workout = () => {
  const styles = getStyles(useColors())
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cvičení</Text>

      <Link href="/done" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Dále</Text>
        </Pressable>
      </Link>
    </View>
  )
}

export default Workout

const getStyles = (palette) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    title: {
      fontFamily: fonts.bold,
      fontSize: 26,
      color: palette.text,
      alignSelf: 'flex-start',
    },
    button: {
      minHeight: 56,
      marginTop: spacing.lg,
      paddingHorizontal: spacing.lg,
      borderRadius: radius.pill,
      backgroundColor: palette.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontFamily: fonts.bold,
      fontSize: 15,
      color: palette.onPrimary,
    },
  })
