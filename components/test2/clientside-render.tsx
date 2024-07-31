'use client';
import { TabButtons } from '../common/tab-buttons';
import { useState, useTransition } from 'react';
import SurahList from '../home/SurahList';
import JuzList from '../home/JuzList';

const ClientsideRender = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPending, startTransition] = useTransition();
  const [content, setContent] = useState(<SurahList />);

  const handleClick = (index: number) => {
    setActiveTab(index);
    startTransition(() => {
      switch (index) {
        case 0:
          setContent(<SurahList />);
          break;
        case 1:
          setContent(<JuzList />);
          break;
        case 2:
          setContent(<div>Page List</div>);
          break;
        case 3:
          setContent(<div>Subject List</div>);
          break;
      }
    });
  };

  return (
    <div>
      <TabButtons
        activeTab={activeTab}
        handleClick={handleClick}
        tabs={[{ label: 'surah' }, { label: 'juz' }, { label: 'page' }, { label: 'subject' }]}
      />
      {isPending && 'Loading...'}
      <div>{content}</div>
    </div>
  );
};

export default ClientsideRender;
