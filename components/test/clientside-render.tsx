'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useTransition } from 'react';
import { TabButtons } from '../common/tab-buttons';
import JuzList from '../home/JuzList';
import SurahList from '../home/SurahList';

const ClientsideRender = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPending, startTransition] = useTransition();
  const [content, setContent] = useState(<SurahList />);
  const [moveForward, setMoveForward] = useState(false);

  const handleClick = (index: number) => {
    setActiveTab(index);
    setMoveForward(index - activeTab > 0 ? true : false);

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
      <AnimatePresence mode="popLayout">
        <TabButtons
          activeTab={activeTab}
          handleClick={handleClick}
          tabs={[{ label: 'surah' }, { label: 'juz' }, { label: 'page' }, { label: 'subject' }]}
          className="min-w-[300px]"
        />
        {isPending && 'Loading...'}
        <motion.div
          key={activeTab}
          initial={{ x: moveForward ? 100 : -100 }}
          animate={{ x: 0 }}
          transition={{ type: 'tween' }}
        >
          {content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ClientsideRender;
