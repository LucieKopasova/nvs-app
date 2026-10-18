import { Image, useColorScheme } from 'react-native'

//images
import darkLogo from '../assets/img/logo_dark.png'
import lightLogo from '../assets/img/logo_light.png'

const ThemedLogo = ({ style, ...props }) => {
  const colorScheme = useColorScheme()

  const logo = colorScheme === 'dark' ? darkLogo : lightLogo

  return <Image source={logo} style={style} {...props} />
}

export default ThemedLogo
