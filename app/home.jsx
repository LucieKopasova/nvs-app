import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import logo from '../assets/img/logo.png'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dnes</Text>

      <Link href="/workout" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Cvičíme dnes</Text>
        </Pressable>
      </Link>

      <Link href="/calendar" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Kalendář</Text>
        </Pressable>
      </Link>

      <Link href="/notes" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Poznámky</Text>
        </Pressable>
      </Link>

      <Link href="/info-nvs" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Neurovývojová stimulace</Text>
        </Pressable>
      </Link>

      <Link href="/reflexes" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Primární reflexy</Text>
        </Pressable>
      </Link>

      <Link href="/library" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Knihovna cviků</Text>
        </Pressable>
      </Link>

      <Link href="/settings" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Nastavení</Text>
        </Pressable>
      </Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 15,
  },
  logo: {
    width: 280,
    height: 280,
    resizeMode: 'contain',
    marginBottom: 24,
  },
  title: {
    fontFamily: 'NunitoSans_700Bold',
    fontSize: 26,
    color: '#303F49',
    alignSelf: 'flex-start',
  },
  subtitle: {
    fontFamily: 'NunitoSans_400Regular',
    fontSize: 17,
    color: '#42483E',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 32,
  },
  button: {
    alignSelf: 'stretch',
    minHeight: 56,
    paddingHorizontal: 24,
    borderRadius: 9999,
    backgroundColor: '#35AFCB',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 6px 16px -4px rgba(53, 175, 203, 0.35)',
  },
  buttonText: {
    fontFamily: 'NunitoSans_700Bold',
    fontSize: 15,
    color: '#FFFFFF',
  },
})
