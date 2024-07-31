import { groupSurahByJuz } from '@/utils/group-surah-by-juz';
import { ListCard } from '../common/list-card';
import { surahList } from '@/data/quran-surah';
import React from 'react';

const JuzList = () => {
  const juzList = groupSurahByJuz(surahList);
  const juzArray = Object.entries(juzList).map(([juz, surahs]) => ({
    juz: Number(juz),
    surahs,
  }));

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 bg-white">
      {juzArray.map((juz) => (
        <div key={juz.juz}>
          <h2>Juz {juz.juz}</h2>
          <div className="space-y-2">
            {juz.surahs.map((surah) => (
              <ListCard key={surah.id}>
                <ListCard.Count>{surah.id}</ListCard.Count>
                <ListCard.Content>
                  <ListCard.Title>{surah.name}</ListCard.Title>
                  <ListCard.Subtitle>{surah.meaning}</ListCard.Subtitle>
                </ListCard.Content>
              </ListCard>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JuzList;
