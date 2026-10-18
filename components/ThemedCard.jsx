import { StyleSheet, View } from 'react-native'
import { useColors, radius, spacing } from '../constants/theme'

const ThemedCard = ({ style, ...props }) => {
  const palette = useColors()

  return (
    <View
      style={[{ backgroundColor: palette.card }, styles.card, style]}
      {...props}
    />
  )
}

export default ThemedCard

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.card,
    padding: spacing.lg,
  },
})
