'use client';

import { Tab } from '../common/tab-composition';
import JuzList from '../home/JuzList';
import PageList from '../home/PageList';
import SurahList from '../home/SurahList';

const AyahSidebar = () => {
  return (
    <div className="flex flex-col overflow-hidden border-r bg-white pe-5 ps-4 [--padding-right:24px]">
      <Tab>
        <Tab.Trigger />
        <Tab.Content>
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
