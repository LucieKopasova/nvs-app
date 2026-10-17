import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  useWindowDimensions,
} from 'react-native'
import React from 'react'
import { useColors, fonts, spacing } from '../../constants/theme'

const Starfish = () => {
  const styles = getStyles(useColors())
  // Screen height, so the video placeholder can take one third of it
  const { height } = useWindowDimensions()

  return (
    <ScrollView style={styles.screen}>
      {/* Grey placeholder, later replaced by the preview video */}
      <View style={[styles.video, { height: height / 3 }]} />

      <View style={styles.content}>
        <Text style={styles.title}>Hvězdice</Text>
        <Text style={styles.text}>
          Dítě sedí na židli nebo na zemi. Na začátku je schoulené do klubíčka:
          ruce zkřížené na hrudi, nohy u sebe a pokrčené, hlava skloněná. S
          nádechem se roztáhne do hvězdy, ruce i nohy daleko od těla a hlava
          mírně zakloněná. S výdechem se vrátí do klubíčka. Opakovat 5–10krát
          pomalu a plynule.
        </Text>

        <Text style={styles.subtitle}>Dechová cvičení</Text>
        <Text style={styles.text}>
          Pomalý nádech nosem do břicha (břicho se zvedá) a ještě pomalejší
          výdech pusou. Asi 5–10 nádechů.
        </Text>

        <Text style={styles.subtitle}>
          Zklidňující cvičení a pomalé houpání
        </Text>
        <Text style={styles.text}>
          Dítě leží nebo sedí a dospělý ho pomalu a rytmicky houpe, například v
          dece, na velkém míči nebo v náruči. Cílem je, aby se dítě uvolnilo.
        </Text>
      </View>
    </ScrollView>
  )
}

export default Starfish

const getStyles = (palette) =>
  StyleSheet.create({
    screen: {
      flex: 1,
    },
    video: {
      backgroundColor: palette.mutedSurface,
    },
    content: {
      paddingHorizontal: 20,
      paddingVertical: spacing.lg,
    },
    title: {
      fontFamily: fonts.bold,
      fontSize: 26,
      color: palette.text,
    },
    subtitle: {
      fontFamily: fonts.bold,
      fontSize: 19,
      color: palette.text,
      marginTop: spacing.xs,
    },
    text: {
      fontFamily: fonts.regular,
      fontSize: 17,
      color: palette.textAlt,
      marginTop: spacing.xs,
      marginBottom: spacing.md,
    },
  })
