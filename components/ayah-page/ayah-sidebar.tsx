'use client';
import { Tab } from '../common/tab-composition';
import JuzList from '../home/JuzList';
import PageList from '../home/PageList';
import SurahList from '../home/SurahList';

const AyahSidebar = () => {
  return (
    <div className="flex h-full flex-col gap-3 border-r bg-white ps-4 pt-3 [--padding-right:24px]">
      <Tab>
        <Tab.Trigger className="flex-shrink-0 pe-[--padding-right]" />
        <Tab.Content className="flex flex-col overflow-hidden">
          <Tab.ContentItem label="Surah">
            <SurahList />
          </Tab.ContentItem>
          <Tab.ContentItem label="Juz">
            <JuzList />
          </Tab.ContentItem>
          <Tab.ContentItem label="Page">
            <PageList />
          </Tab.ContentItem>
        </Tab.Content>
      </Tab>
    </div>
  );
};

export default AyahSidebar;
