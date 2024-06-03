import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import FullsizeWrapper from '../../components/FullsizeWrapper';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NewsItem from '../../components/NewsItem';
import { NewsApiResponse, NewsArticle } from '../../utils/interfaces/news';

export default function Tab() {
    const [news, setNews] = useState<NewsArticle[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get<NewsApiResponse>('https://newsapi.org/v2/everything', {
                    params: {
                        q: 'BTS',
                        apiKey: process.env.EXPO_PUBLIC_NEWSAPI_KEY,
                        lang: 'en',
                        sortBy: 'publishedAt',
                        pageSize: 20
                    }
                });
                setNews(response?.data?.articles);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [])

    return (
        <FullsizeWrapper>
            <View className='gap-y-9'>
                <View className='py-6 gap-y-2'>
                    <Text className='text-4xl font-bold text-[#CEB2B2] font-poppins'>Olá Sophie</Text>
                    <Text className='text-gray-50 text-xl font-poppins'>Seja bem vinda ao ArmyApp</Text>
                </View>
                <Text className='text-4xl font-bold text-gray-50 font-poppins'>Novidades</Text>
            </View>
            <View className='pt-9 pb-30'>
                {loading ? <ActivityIndicator size='large' color='#CEB2B2' /> : (
                    <FlatList
                        data={news}
                        initialNumToRender={5}
                        renderItem={({ item }) => <NewsItem news={item} />}
                        keyExtractor={item => item.url}
                    />
                )}
            </View>
        </FullsizeWrapper>
    )
}