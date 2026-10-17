import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { colors, fonts, spacing, radius } from '../constants/theme'

const Workout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cvičení</Text>

      <Link href="/done" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Dále</Text>
        </Pressable>
      </Link>

      <Link href="/home" style={styles.link}>
        Zpět
      </Link>
    </View>
  )
}

export default Workout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 26,
    color: colors.text,
    alignSelf: 'flex-start',
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
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
    alignSelf: 'flex-end',
  },
})
