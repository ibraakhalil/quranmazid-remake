import { ListCard } from '@/components/common/list-card';
import { surahList, SurahListType } from '@/data/quran-surah';
import Fuse from 'fuse.js';
import { ChangeEvent, useState } from 'react';
import SearchInput from '../common/search-input';

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
    <div className="flex flex-col gap-3 overflow-hidden">
      <SearchInput className="me-[--padding-right] flex-shrink-0" onChange={handleSearch} />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 overflow-auto pb-3 pe-[--padding-right]">
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
