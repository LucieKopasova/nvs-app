import { StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useColors, fonts, spacing, radius } from '../constants/theme'

//themed components
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const DoneScreen = () => {
  const styles = getStyles(useColors())
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} title={true}>
        Hotovo
      </ThemedText>

      <Link href="/calendar" asChild>
        <Pressable style={styles.button}>
          <ThemedText style={styles.buttonText}>Dále</ThemedText>
        </Pressable>
      </Link>
    </ThemedView>
  )
}

export default DoneScreen

const getStyles = (palette) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    title: {
      fontFamily: fonts.bold,
      fontSize: 34,
      textAlign: 'center',
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
