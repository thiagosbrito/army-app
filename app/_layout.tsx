import { Stack } from "expo-router";
import "../global.css"
import { View } from "react-native";

export default function Layout() {
    return  (
        <Stack initialRouteName="(tabs)/index">
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            {/* <Stack.Screen name="(music)" options={{ headerShown: false }} /> */}
        </Stack>
    );
};