'use client';

import { Tab } from '../test/TabComposition';
import JuzList from './JuzList';
import SurahList from './SurahList';

const QuranIndexing = () => {
  return (
    <div className="my_conatainer">
      <Tab>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Quran Mazid</h1>
          <Tab.Trigger />
        </div>
        <Tab.Content className="mt-5">
          <Tab.ContentItem label="Surah" loadingContent="loading....">
            <SurahList />
          </Tab.ContentItem>
          <Tab.ContentItem label="juz" loadingContent="loading">
            <JuzList />
          </Tab.ContentItem>
        </Tab.Content>
      </Tab>
    </div>
  );
};

export default QuranIndexing;
