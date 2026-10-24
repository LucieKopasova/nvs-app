import { StyleSheet } from 'react-native'
import { useCallback, useState } from 'react'
import { Calendar, LocaleConfig } from 'react-native-calendars'
import { format, parseISO } from 'date-fns'
import { cs } from 'date-fns/locale'
import { useFocusEffect } from 'expo-router'

//themed components
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import { useColors } from '../../constants/theme'
import ThemedText from '../../components/ThemedText'
import ThemedCard from '../../components/ThemedCard'

//storage
import { getExercisedDates } from '../../storage/records'

LocaleConfig.locales.cs = {
  monthNames: [
    'Leden',
    'Únor',
    'Březen',
    'Duben',
    'Květen',
    'Červen',
    'Červenec',
    'Srpen',
    'Září',
    'Říjen',
    'Listopad',
    'Prosinec',
  ],
  monthNamesShort: [
    'led',
    'úno',
    'bře',
    'dub',
    'kvě',
    'čvn',
    'čvc',
    'srp',
    'zář',
    'říj',
    'lis',
    'pro',
  ],
  dayNames: [
    'neděle',
    'pondělí',
    'úterý',
    'středa',
    'čtvrtek',
    'pátek',
    'sobota',
  ],
  dayNamesShort: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'],
  today: 'Dnes',
}
LocaleConfig.defaultLocale = 'cs'

const CalendarScreen = () => {
  const palette = useColors()
  const [selectedDate, setSelectedDate] = useState('')

  const [exercisedDates, setExercisedDates] = useState([])

  useFocusEffect(
    useCallback(() => {
      const loadDates = async () => {
        const dates = await getExercisedDates()
        setExercisedDates(dates)
      }
      loadDates()
    }, []),
  )

  const selectedLabel =
    selectedDate !== ''
      ? format(parseISO(selectedDate), 'd. MMMM', { locale: cs })
      : ''

  const isExercised = exercisedDates.includes(selectedDate)

  const markedDates = {}
  exercisedDates.forEach((date) => {
    markedDates[date] = {
      customStyles: {
        container: { backgroundColor: palette.mutedSurface },
      },
    }
  })
  markedDates[selectedDate] = { selected: true }

  return (
    <ThemedView style={styles.container}>
      <Spacer height={24} />
      <Calendar
        firstDay={1}
        markingType="custom"
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={markedDates}
        theme={{
          calendarBackground: palette.card,
          monthTextColor: palette.text,
          textSectionTitleColor: palette.textAlt,
          dayTextColor: palette.text,
          todayTextColor: palette.primary,
          arrowColor: palette.primary,
          selectedDayBackgroundColor: palette.primary,
          selectedDayTextColor: palette.onPrimary,
        }}
      />
      <Spacer height={24} />
      {selectedDate !== '' && (
        <ThemedCard>
          <ThemedText title={true}>{selectedLabel}</ThemedText>
          {isExercised && <ThemedText>Odcvičeno</ThemedText>}
          {!isExercised && (
            <ThemedText>Pro tento den zatím nemáte žádný záznam.</ThemedText>
          )}
        </ThemedCard>
      )}
    </ThemedView>
  )
}

export default CalendarScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'NunitoSans_700Bold',
    fontSize: 26,
    alignSelf: 'flex-start',
  },
})
