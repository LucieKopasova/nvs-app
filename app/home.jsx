import { StyleSheet, Pressable } from 'react-native'
import { Link } from 'expo-router'
import { useColors } from '../constants/theme'

//themed components
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const HomeScreen = () => {
  const styles = getStyles(useColors())
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} title={true}>
        Dnes
      </ThemedText>

      <Link href="/workout" asChild>
        <Pressable style={styles.button}>
          <ThemedText style={styles.buttonText}>Cvičíme dnes</ThemedText>
        </Pressable>
      </Link>

      <Link href="/calendar" asChild>
        <Pressable style={styles.button}>
          <ThemedText style={styles.buttonText}>Kalendář</ThemedText>
        </Pressable>
      </Link>

      <Link href="/notes" asChild>
        <Pressable style={styles.button}>
          <ThemedText style={styles.buttonText}>Poznámky</ThemedText>
        </Pressable>
      </Link>

      <Link href="/info-nvs" asChild>
        <Pressable style={styles.button}>
          <ThemedText style={styles.buttonText}>
            Neurovývojová stimulace
          </ThemedText>
        </Pressable>
      </Link>

      <Link href="/reflexes" asChild>
        <Pressable style={styles.button}>
          <ThemedText style={styles.buttonText}>Primární reflexy</ThemedText>
        </Pressable>
      </Link>

      <Link href="/library" asChild>
        <Pressable style={styles.button}>
          <ThemedText style={styles.buttonText}>Knihovna cviků</ThemedText>
        </Pressable>
      </Link>

      <Link href="/settings" asChild>
        <Pressable style={styles.button}>
          <ThemedText style={styles.buttonText}>Nastavení</ThemedText>
        </Pressable>
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
