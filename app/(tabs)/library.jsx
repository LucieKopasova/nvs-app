import { StyleSheet, View, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useColors, fonts, spacing, radius } from '../../constants/theme'

//themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'

const LibraryScreen = () => {
  const styles = getStyles(useColors())
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} title={true}>
        Knihovna cviků
      </ThemedText>

      <View style={styles.grid}>
        <Link href="/library/starfish" asChild>
          <Pressable style={styles.card}>
            <View style={styles.thumbnail} />
            <ThemedText style={styles.cardTitle} title={true}>
              Hvězdice
            </ThemedText>
          </Pressable>
        </Link>

        <View style={styles.card}>
          <View style={styles.thumbnail} />
          <ThemedText style={styles.cardTitle} title={true}>
            Ještěrka
          </ThemedText>
        </View>

        <View style={styles.card}>
          <View style={styles.thumbnail} />
          <ThemedText style={styles.cardTitle} title={true}>
            Kočičí hřbet
          </ThemedText>
        </View>
      </View>
    </ThemedView>
  )
}

export default LibraryScreen

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
      alignSelf: 'flex-start',
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
      backgroundColor: palette.card,
      borderWidth: 1,
      borderColor: palette.hairline,
    },
    thumbnail: {
      aspectRatio: 1,
      borderRadius: radius.sm,
      backgroundColor: palette.mutedSurface,
    },
    cardTitle: {
      fontFamily: fonts.bold,
      fontSize: 13,
      textAlign: 'center',
      marginTop: spacing.xs,
    },
  })
