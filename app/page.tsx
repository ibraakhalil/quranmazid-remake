import EditBookmarkFolder from '@/components/bookmark/EditBookmark';
import { ListCard } from '@/components/common/list-card';
import Collection from '@/components/home/Collection';
import Header from '@/components/home/Header';
import Hero from '@/components/home/Hero';
import QuranIndexing from '@/components/home/QuranIndexing';
import Search from '@/components/home/Search';
import Bottomsheet from '@/components/test2/Bottomsheet';
import CreateProjectForm from '@/components/test2/Card';
import FontSettings from '@/components/test2/Dropdown';
import ProjectCard from '@/components/test2/ProjectCard';
import Sidebar from '@/components/test2/Sidebar';

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
