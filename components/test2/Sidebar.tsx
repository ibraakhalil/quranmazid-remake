import { title } from "process";
import SearchBar from "./SearchBar";
import SurahList from "./SurahList";
import Tabs from "./Tabs";

const tabs = [
    { title: 'Sura' },
    { title: 'Juz' },
    { title: 'Page' },
];
const surahs = [
    { title: "Al-Fatiha", subtitle: "The Opener" },
    { title: "Al-Fatiha", subtitle: "The Opener" },
    { title: "Al-Fatiha", subtitle: "The Opener" },
    { title: "Al-Fatiha", subtitle: "The Opener" },
    { title: "Al-Fatiha", subtitle: "The Opener" },
    { title: "Al-Fatiha", subtitle: "The Opener" },
    { title: "Al-Fatiha", subtitle: "The Opener" },
    { title: "Al-Fatiha", subtitle: "The Opener" },
    { title: "Al-Fatiha", subtitle: "The Opener" },
];
const Sidebar = () => {
    return (
        <div className="w-[320px] mx-auto p-4 bg-gray-300 rounded-lg mt-4">
            <Tabs tabs={tabs} />
            <SearchBar />
            <SurahList surahs={surahs} />
        </div>
    );
}

export default Sidebar;