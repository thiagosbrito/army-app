import { View, Text } from 'react-native';
import { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function FullsizeWrapper({children}: {children: ReactNode}) {
    return (
        <View className='flex-1 w-screen'>
            <LinearGradient
                colors={['#1E1C1C', '#3D3D3D']}
            >
                <View className='h-screen w-screen pt-14 px-8'>
                    { children }
                </View>
            </LinearGradient>
        </View>
    )
}