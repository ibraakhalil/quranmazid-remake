import Collection from '@/components/home/Collection';
import Header from '@/components/home/Header';
import Hero from '@/components/home/Hero';
import QuranIndex from '@/components/home/QuranIndex';
import Search from '@/components/home/Search';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Search />
        <Collection />
        <QuranIndex />
      </main>
    </div>
  );
}
