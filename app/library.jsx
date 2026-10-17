import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { colors, fonts, spacing, radius } from '../constants/theme'

const library = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Knihovna cviků</Text>

      <View style={styles.grid}>
        <Link href='/library/starfish' asChild>
          <Pressable style={styles.card}>
            <View style={styles.thumbnail} />
            <Text style={styles.cardTitle}>Hvězdice</Text>
          </Pressable>
        </Link>

        <View style={styles.card}>
          <View style={styles.thumbnail} />
          <Text style={styles.cardTitle}>Ještěrka</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.thumbnail} />
          <Text style={styles.cardTitle}>Kočičí hřbet</Text>
        </View>
      </View>

      <Link href='/home' style={styles.link}>Zpět</Link>
    </View>
  )
}

export default library

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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginTop: spacing.lg,
  },
  card: {
    width: '30%',
    padding: spacing.xs,
    borderRadius: radius.default,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.hairline,
  },
  thumbnail: {
    aspectRatio: 1,
    borderRadius: radius.sm,
    backgroundColor: colors.mutedSurface,
  },
  cardTitle: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: colors.text,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
    alignSelf: 'flex-end'
  }
})
