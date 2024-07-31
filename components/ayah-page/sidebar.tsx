'use client';
import { useState } from 'react';
import { ListCard } from '../common/list-card';
import SearchInput from '../common/search-input';
import Tabs from '../common/tab-buttons';

const AyahSidebar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabArr = [{ label: 'Surah' }, { label: 'Juz' }, { label: 'Para' }];
  const arr = new Array(96).fill('length');

  return (
    <div className="flex h-full flex-col border-r bg-white ps-4 [--padding-right:24px]">
      <div className="space-y-3 bg-white py-4 pe-[--padding-right]">
        <Tabs tabs={tabArr} activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchInput className="p-0" />
      </div>
      <div className="space-y-2 overflow-y-auto pe-[--padding-right]">
        {arr.map((item, i) => (
          <ListCard key={item}>
            <ListCard.Count count={i} />
            <ListCard.Title />
          </ListCard>
        ))}
      </div>
    </div>
  );
};

export default AyahSidebar;
