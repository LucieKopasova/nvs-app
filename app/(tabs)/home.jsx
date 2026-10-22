import { StyleSheet, Pressable } from 'react-native'
import { Link } from 'expo-router'
import { useColors } from '../../constants/theme'

//themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'

const HomeScreen = () => {
  const styles = getStyles(useColors())
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} title={true}>
        Dnes
      </ThemedText>

      <Link href="/workout" asChild>
        <ThemedButton title="Cvičíme dnes" />
      </Link>

    </ThemedView>
  )
}

export default HomeScreen

const getStyles = (palette) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      gap: 15,
    },
    title: {
      fontFamily: 'NunitoSans_700Bold',
      fontSize: 26,
      alignSelf: 'flex-start',
    },
    button: {
      alignSelf: 'stretch',
      minHeight: 56,
      paddingHorizontal: 24,
      borderRadius: 9999,
      backgroundColor: palette.primary,
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 6px 16px -4px rgba(53, 175, 203, 0.35)',
    },
    buttonText: {
      fontFamily: 'NunitoSans_700Bold',
      fontSize: 15,
      color: palette.onPrimary,
    },
  })
