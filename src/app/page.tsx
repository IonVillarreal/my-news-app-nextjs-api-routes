import NewsList from './components/NewsList';

export const revalidate = 60

interface NewsItem {
  id: number;
  title: string;
  image: string;
  content: string;
}

async function fetchNews(): Promise<NewsItem[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news`);
  return res.json();
}

export default async function HomePage() {
  const news = await fetchNews();
  return (
      <div>

        <NewsList news={news} />
      </div>
  );
}