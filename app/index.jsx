import { StyleSheet, Pressable } from 'react-native'
import { Link } from 'expo-router'
import { useColors } from '../constants/theme'

//themed components
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const WelcomeScreen = () => {
  const styles = getStyles(useColors())
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.logo} />
      <Spacer height={24} />

      <ThemedText style={styles.title} title={true}>
        Hravé reflexy
      </ThemedText>
      <Spacer height={8} />

      <ThemedText style={styles.subtitle}>
        Neurovývojová stimulace s úsměvem
      </ThemedText>
      <Spacer height={32} />

      <Link href="/home" asChild>
        <Pressable style={styles.button}>
          <ThemedText style={styles.buttonText}>Pokračovat</ThemedText>
        </Pressable>
      </Link>
    </ThemedView>
  )
}

export default WelcomeScreen

const getStyles = (palette) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    logo: {
      width: 280,
      height: 280,
      resizeMode: 'contain',
    },
    title: {
      fontFamily: 'NunitoSans_700Bold',
      fontSize: 26,
      textAlign: 'center',
    },
    subtitle: {
      fontFamily: 'NunitoSans_400Regular',
      fontSize: 17,
      textAlign: 'center',
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
