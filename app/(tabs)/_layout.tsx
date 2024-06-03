import { Tabs } from 'expo-router'
import { CalendarSearch, Home, Images, Music, PlayIcon } from 'lucide-react-native'
import { View } from 'react-native'

export default function TabLayout() {
    return (
        
        <Tabs screenOptions={{ 
            headerShown: false,
            tabBarStyle: { 
                backgroundColor: '#1F1D1D'
            },
            tabBarActiveTintColor: '#CEB2B2',
            tabBarInactiveTintColor: '#6F5C5C',
            tabBarShowLabel: false
        }}>
            <Tabs.Screen 
                name='index'
                options={{
                    tabBarIcon: ({ color }) => <Home color={color} />
                }}
            />
            <Tabs.Screen 
                name='music'
                options={{
                    tabBarIcon: ({ color }) => <Music color={color} />
                }}
            />
            <Tabs.Screen 
                name='gallery'
                options={{
                    tabBarIcon: ({ color }) => <Images color={color} />
                }}
            />
            <Tabs.Screen 
                name='events'
                options={{
                    tabBarIcon: ({ color }) => <CalendarSearch color={color} />
                }}
            />
            <Tabs.Screen 
                name='player'
                options={{
                    href:null,
                    tabBarIcon: ({ color }) => <PlayIcon color={color} />
                }}
            />
        </Tabs>
        
    )
}