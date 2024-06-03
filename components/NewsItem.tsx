import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { NewsArticle } from '../utils/interfaces/news'

export default function NewsItem({ news }: { news: NewsArticle }) {
    return (
        <View className='w-full h-64 rounder-xl py-4 shadow-md'>
            <ImageBackground
                className='w-full h-full rounded-xl overflow-hidden px-6 py-4'
                source={{uri: news.urlToImage}}
            >
                <Text className='text-3xl font-bold text-white mt-auto'>{news.title}</Text>
            </ImageBackground>
        </View>
    )
}