import { ListCard } from '@/components/common/list-card';
import { surahList, SurahListType } from '@/data/quran-surah';
import React, { ChangeEvent, useState } from 'react';
import SearchInput from '../common/search-input';
import Fuse from 'fuse.js';

const fuse = new Fuse<SurahListType>(surahList, {
  keys: ['name'],
  threshold: 0.3,
});

const SurahList = () => {
  const [searchValue, setSearchValue] = useState('');

  const results = searchValue ? fuse.search(searchValue).map((result) => result.item) : surahList;

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <SearchInput onChange={handleSearch} />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
        {results.map((surah) => (
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
  );
};

export default SurahList;
