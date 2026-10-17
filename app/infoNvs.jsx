import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const InfoNvs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nerovovyvojová stimulace</Text>

       <Text style={styles.text}>
              Neuro-vývojová stimulace (NVS) je metoda, která pomocí jednoduchého pohybu podporuje správný vývoj dítěte. Pohyb miminka v prvních měsících života pomáhá v mozku vytvářet propojení, která dítě později potřebuje k učení, řeči a soustředění.

              Pokud tento vývoj neproběhne úplně, například kvůli náročnému porodu nebo nemoci, může mít dítě později potíže se soustředěním, koordinací, psaním, čtením nebo chováním.

              NVS tvoří krátké cviky, které dítě dělá pravidelně doma s rodičem. Díky opakování si mozek vytváří nová propojení a dítě se může lépe soustředit, pohybovat jistěji a být klidnější.
        </Text>
        <Link href='/' style={styles.link}>Zpět</Link>
    </View>
  )
}

export default InfoNvs
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
   title: {
    fontFamily: 'NunitoSans_700Bold',
    fontSize: 26,
    color: '#303F49',
    textAlign: 'center',
  },
  text: {
    fontFamily: 'NunitoSans_400Regular',
    fontSize: 17,
    color: '#42483E',
    marginTop: 8,
    marginBottom: 32,
  },
  link:{
    marginVertical: 10,
    borderBottomWidth: 1,
    alignSelf: 'center'
  }
})
