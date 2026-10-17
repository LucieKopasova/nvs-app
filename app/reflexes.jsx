import { StyleSheet, View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Reflexes = () => {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
      <Text style={styles.title}>Primární reflexy</Text>

      <Text style={styles.text}>
        Primární reflexy jsou automatické pohybové reakce. Objevují se už v prenatálním období a v prvních měsících pomáhají miminku přežít a vyvíjet se. Postupně by měly odeznít (inhibovat se) a nahradit je posturální reflexy a vědomě řízený pohyb. Když reflex přetrvává déle, než má, může dítěti komplikovat učení, pohyb, soustředění i chování.
      </Text>

      <View style={styles.block}>
        <Text style={styles.subtitle}>Moro reflex</Text>
        <Text style={styles.text}>
          Je to poplachová reakce na náhlý podnět, třeba hlasitý zvuk, prudkou změnu polohy nebo světla. Miminko rozhodí ruce, nadechne se a pak je přitáhne k tělu. Reflex by měl odeznít ve 2. až 4. měsíci. Pokud přetrvává, dítě může být přecitlivělé na zvuky, světlo a dotyky, snadno se lekne, bývá úzkostné, výbušné nebo trpí výkyvy nálad.
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.subtitle}>Hledací reflex</Text>
        <Text style={styles.text}>
          Když se miminka někdo dotkne na tváři nebo kolem úst, otočí hlavu za podnětem a otevře ústa, aby našlo prsní bradavku. Odeznívá kolem 3. až 4. měsíce. Pokud přetrvává, dítě může mít citlivé okolí úst, potíže s jídlem nebo nepřesnou výslovnost.
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.subtitle}>Sací reflex</Text>
        <Text style={styles.text}>
          Dotkne-li se něco rtů nebo patra, miminko začne rytmicky sát. Je to základ pro kojení. Odeznívá kolem 3. až 4. měsíce. Při přetrvávání se mohou objevit potíže s polykáním, žvýkáním a artikulací a dítě může mít sklon cucat si prsty nebo okusovat předměty.
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.subtitle}>Palmární (úchopový) reflex</Text>
        <Text style={styles.text}>
          Když miminku něco přitlačíte do dlaně, sevře to v pěst. Reflex úzce souvisí s pohyby úst. Odeznívá mezi 3. a 6. měsícem. Pokud přetrvává, dítě může špatně držet tužku, mít neobratnou jemnou motoriku a při psaní nebo stříhání se mu mohou souhybně pohybovat ústa či jazyk.
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.subtitle}>Plantární reflex</Text>
        <Text style={styles.text}>
          Po tlaku na chodidlo pod prsty se prsty u nohou ohnou, jako by chtěly něco uchopit. Odeznívá zhruba mezi 7. a 12. měsícem, kdy se dítě začíná stavět a chodit. Při přetrvávání se mohou objevit neobvyklý způsob chůze, chůze po špičkách nebo horší rovnováha.
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.subtitle}>Tonický labyrintový reflex (TLR)</Text>
        <Text style={styles.text}>
          Reaguje na náklon hlavy dopředu nebo dozadu. Při předklonu se celé tělo ohýbá, při záklonu napíná. Varianta vpřed odeznívá kolem 4. měsíce, varianta vzad postupně až do 3 let. Přetrvávající TLR může souviset se špatnou rovnováhou, kinetózou (nevolností v autě), ochablým nebo naopak ztuhlým držením těla a horší orientací v prostoru.
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.subtitle}>Asymetrický tonický šíjový reflex (ATŠR)</Text>
        <Text style={styles.text}>
          Když miminko otočí hlavu na stranu, natáhne ruku a nohu na té straně a druhou stranu pokrčí. Podporuje propojení oko–ruka. Měl by odeznít kolem 6. měsíce. Pokud přetrvává, dítě mívá potíže s psaním, s překřižováním střední čáry těla, se sledováním řádku při čtení a s koordinací obou stran těla.
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.subtitle}>Symetrický tonický šíjový reflex (STŠR)</Text>
        <Text style={styles.text}>
          Objevuje se na krátkou dobu kolem 6. až 9. měsíce a pomáhá dítěti zvednout se na čtyři. Když dítě zvedne hlavu, ruce se natáhnou a nohy pokrčí, a naopak. Měl by odeznít mezi 9. a 11. měsícem. Při přetrvávání dítě často nelezlo po čtyřech, hrbí se při sezení, „visí“ na lavici, těžko opisuje z tabule a hůř se soustředí.
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.subtitle}>Spinální Galantův reflex</Text>
        <Text style={styles.text}>
          Dotyk na zádech podél páteře vyvolá ohnutí trupu na tu stranu. Reflex pomáhá při porodu a rozvíjí pohyblivost páteře. Odeznívá mezi 3. a 9. měsícem. Pokud přetrvává, dítě bývá neposedné, vadí mu těsné oblečení a pásek a bývá spojován i s nočním pomočováním po 5. roce věku.
        </Text>
      </View>

      <Link href='/home' style={styles.link}>Zpět</Link>
    </ScrollView>
  )
}

export default Reflexes
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontFamily: 'NunitoSans_700Bold',
    fontSize: 26,
    color: '#303F49',
    textAlign: 'center',
  },
  block: {
    marginTop: 8,
  },
  subtitle: {
    fontFamily: 'NunitoSans_700Bold',
    fontSize: 19,
    color: '#303F49',
  },
  text: {
    fontFamily: 'NunitoSans_400Regular',
    fontSize: 17,
    color: '#42483E',
    marginTop: 8,
    marginBottom: 16,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
    alignSelf: 'flex-end'
  }
})
