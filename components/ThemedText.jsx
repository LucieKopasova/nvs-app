import { Text } from 'react-native'
import { useColors } from '../constants/theme'

const ThemedText = ({ style, title = false, ...props }) => {
  const palette = useColors()

  // Titles use the darker text color, normal text the softer one
  const textColor = title ? palette.text : palette.textAlt

  return <Text style={[{ color: textColor }, style]} {...props} />
}

export default ThemedText
