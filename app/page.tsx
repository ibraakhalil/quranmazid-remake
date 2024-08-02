import Collection from '@/components/home/Collection';
import Header from '@/components/home/Header';
import Hero from '@/components/home/Hero';
import QuranIndexing from '@/components/home/QuranIndexing';
import Search from '@/components/home/Search';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Search />
        <Collection />
        <QuranIndexing />
      </main>
    </div>
  );
}
