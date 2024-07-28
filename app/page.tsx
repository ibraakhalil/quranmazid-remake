import EditBookmarkFolder from "@/components/bookmark/EditBookmark";
import { ListCard } from "@/components/common/list-card";
import Collection from "@/components/home/Collection";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import QuranIndexing from "@/components/home/QuranIndexing";
import Recent from "@/components/home/Recent";
import Search from "@/components/home/Search";
import Bottomsheet from "@/components/test/Bottomsheet";
import CreateProjectForm from "@/components/test/Card";
import FontSettings from "@/components/test/Dropdown";
import ProjectCard from "@/components/test/ProjectCard";
import Sidebar from "@/components/test/Sidebar";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Search />
        <Recent />
        <Collection />
        <QuranIndexing />
        {/* <Sidebar />
        <EditBookmarkFolder />
        <FontSettings />
        <ProjectCard />
        <Bottomsheet />
        <CreateProjectForm /> */}
      </main>
    </div>
  );
}
