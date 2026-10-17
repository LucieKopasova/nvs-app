import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import logo from '../assets/img/logo.png'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <Text style={styles.title}>Hravé reflexy</Text>

      <Text style={styles.subtitle}>
        Neurovývojová stimulace s úsměvem
      </Text>

      <Link href="/home" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Pokračovat</Text>
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
    textAlign: 'center',
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
