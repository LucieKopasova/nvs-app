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
          title: 'Domů',
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
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profil',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
