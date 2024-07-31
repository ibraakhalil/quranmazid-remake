import { ListCard } from '@/components/common/list-card';
import { surahList } from '@/data/quran-surah';
import React from 'react';

const SurahList = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {surahList.map((surah, i) => (
        <ListCard key={i}>
          <ListCard.Count>{surah.id}</ListCard.Count>
          <ListCard.Content>
            <ListCard.Title>{surah.name}</ListCard.Title>
            <ListCard.Subtitle>{surah.meaning}</ListCard.Subtitle>
          </ListCard.Content>
        </ListCard>
      ))}
    </div>
  );
};

export default SurahList;
