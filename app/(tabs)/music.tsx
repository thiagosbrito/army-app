import { View, Text, Alert, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import FullsizeWrapper from '../../components/FullsizeWrapper';
import { SpotifyApi, Track } from "@spotify/web-api-ts-sdk";
import axios from 'axios';

const clientId = process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_SECRET;

const api = SpotifyApi.withClientCredentials(clientId as string, clientSecret as string);

export default function Tab() {

    const [music, setMusic] = useState<Track[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        const fetchMusic = async () => {
            try {
                // Step 1: Get access token
                const tokenResponse = await axios.post(
                    'https://accounts.spotify.com/api/token',
                    'grant_type=client_credentials',
                    {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            Authorization: `Basic ${btoa(clientId + ':' + clientSecret)}`,
                        },
                    }
                );
                const accessToken = tokenResponse.data.access_token;

            // Step 2: Fetch BTS music
                const musicResponse = await axios.get('https://api.spotify.com/v1/search', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                    params: {
                        q: 'BTS',
                        type: 'track'
                    },
                });
                setMusic(musicResponse.data.tracks.items);
                console.log(musicResponse.data.tracks.items);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchMusic();
    }, []);

    return (
        <FullsizeWrapper>
            
            <FlatList
                data={music}
                initialNumToRender={10}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    
                    <View className='flex-row my-2 py-2 px-2 items-center overflow-hidden gap-x-2 rounded-lg bg-[#1E1C1C] shadow-md'>
                        <Image 
                            className='overflow-hidden rounded-lg'
                            source={{ uri: item.album.images[0].url }}
                            style={{ width: 50, height: 50 }}
                        />
                        <View className='ml-2'>
                            <Text className='text-xl text-white font-bold'>{item.name}</Text>
                            <Text className='text-white'>{item.artists[0].name} - {item.album.name}</Text>
                        </View>
                    </View>
                    
                )}
            />
        </FullsizeWrapper>
    )
}