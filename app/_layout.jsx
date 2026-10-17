import { Stack } from 'expo-router'
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'

const RootLayout = () => {
  const [loaded, error] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  // Wait until the fonts are loaded, so the text doesn't start in the system font
  if (!loaded && !error) {
    return null
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#FBF7EF' },
      }}
    />
  )
}

export default RootLayout
