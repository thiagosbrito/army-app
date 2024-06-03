export interface NewsApiResponse {
    status: string;
    totalResults: number;
    articles: NewsArticle[];
}

export interface NewsArticle {
    source: NewsSource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface NewsSource {
    id: string;
    name: string;
}
