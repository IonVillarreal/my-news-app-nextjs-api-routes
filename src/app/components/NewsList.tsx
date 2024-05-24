'use client'
import React from 'react';
import {Card, CardContent, CardMedia, Typography, Grid, Container, CardActionArea} from '@mui/material';
import {useRouter} from "next/navigation";

interface NewsItem {
    id: number;
    title: string;
    image: string;
    content: string;
}

interface NewsListProps {
    news: NewsItem[];
}

const NewsList: React.FC<NewsListProps> = ({ news }) => {
    const router = useRouter()
    return (
        <Container>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
            >
                <Grid item>
                    <h1>Lista de Noticias</h1>
                </Grid></Grid>
            <Grid container spacing={4}>
                {news.map((item) => (
                    <Grid item key={item.id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardActionArea onClick={(event) => {
                                router.push(`/news/${item.id}`)
                            }}>
                                <CardMedia component="img" height="140" image={item.image} alt={item.title} />
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.content}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default NewsList;