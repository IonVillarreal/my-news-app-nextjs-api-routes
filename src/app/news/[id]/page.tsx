import { notFound } from 'next/navigation';
import { Card, CardContent, CardMedia, Typography, Container } from '@mui/material';

interface NewsItem {
    id: number;
    title: string;
    image: string;
    content: string;
}

async function fetchNewsItem(id: string): Promise<NewsItem | null> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news`);
    const news: NewsItem[] = await res.json();
    return news.find((item) => item.id.toString() === id) || null;
}

interface NewsDetailProps {
    params: {
        id: string;
    };
}

export default async function NewsDetail({ params }: NewsDetailProps) {
    const newsItem = await fetchNewsItem(params.id);

    if (!newsItem) {
        notFound();
    }

    return (
        <Container>
            <Card>
                <CardMedia component="img" height="140" image={newsItem.image} alt={newsItem.title} />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {newsItem.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {newsItem.content}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}