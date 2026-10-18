import { View } from 'react-native'
import { useColors } from '../constants/theme'

const ThemedView = ({ style, ...props }) => {
  const palette = useColors()

  return (
    <View style={[{ backgroundColor: palette.background }, style]} {...props} />
  )
}

export default ThemedView
