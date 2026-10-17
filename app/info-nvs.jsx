import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { useColors } from '../constants/theme'

const InfoNvs = () => {
  const styles = getStyles(useColors())
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Neurovývojová stimulace</Text>

      <Text style={styles.text}>
        Neuro-vývojová stimulace (NVS) je metoda, která pomocí jednoduchého
        pohybu podporuje správný vývoj dítěte. Pohyb miminka v prvních měsících
        života pomáhá v mozku vytvářet propojení, která dítě později potřebuje k
        učení, řeči a soustředění. Pokud tento vývoj neproběhne úplně, například
        kvůli náročnému porodu nebo nemoci, může mít dítě později potíže se
        soustředěním, koordinací, psaním, čtením nebo chováním. NVS tvoří krátké
        cviky, které dítě dělá pravidelně doma s rodičem. Díky opakování si
        mozek vytváří nová propojení a dítě se může lépe soustředit, pohybovat
        jistěji a být klidnější.
      </Text>
    </View>
  )
}

export default InfoNvs
const getStyles = (palette) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.background,
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    title: {
      fontFamily: 'NunitoSans_700Bold',
      fontSize: 26,
      color: palette.text,
      textAlign: 'center',
    },
    text: {
      fontFamily: 'NunitoSans_400Regular',
      fontSize: 17,
      color: palette.textAlt,
      marginTop: 8,
      marginBottom: 32,
    },
  })
