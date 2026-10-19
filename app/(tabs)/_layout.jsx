import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useColors } from '../../constants/theme'

const TabsLayout = () => {
  const palette = useColors()
  return (
    <Tabs
      screenOptions={{
        // The header comes from the Stack in app/_layout.jsx
        headerShown: false,
        sceneStyle: { backgroundColor: palette.background },
        tabBarStyle: { backgroundColor: palette.background },
        tabBarActiveTintColor: palette.primary,
        tabBarInactiveTintColor: palette.textAlt,
        // Small text under the icon
        tabBarLabelStyle: { fontFamily: 'NunitoSans_400Regular', fontSize: 11 },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Dnes',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Kalendář',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'calendar' : 'calendar-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="notes"
        options={{
          title: 'Poznámky',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'pencil' : 'pencil-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="library"
        options={{
          title: 'Cviky',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'barbell' : 'barbell-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="guide"
        options={{
          title: 'Průvodce',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'compass' : 'compass-outline'}
              size={size}
              color={color}
            />
          ),
        }}
        // The guide is not ready yet, so tapping the tab does nothing
        listeners={{
          tabPress: (event) => event.preventDefault(),
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
