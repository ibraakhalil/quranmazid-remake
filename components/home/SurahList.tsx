import { ListCard } from '@/components/common/list-card';
import { QuranList } from '@/components/common/list-quran';
import { surahList } from '@/data/quran-surah';
import { useFuzzySearch } from '@/hooks/useFuzzySearch';
import Link from 'next/link';
import { ChangeEvent } from 'react';

const SurahList = () => {
  const [results, setSearchValue] = useFuzzySearch(surahList, { keys: ['name'], threshold: 0.3 });
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <QuranList>
      <QuranList.Search className="me-[--padding-right]" onChange={handleSearch} />
      <QuranList.Content className="pe-[--padding-right]">
        {results.map((surah) => (
          <Link key={surah.id} href={surah.id.toString()}>
            <ListCard>
              <ListCard.Count>{surah.id}</ListCard.Count>
              <ListCard.Content>
                <ListCard.Title>{surah.name}</ListCard.Title>
                <ListCard.Subtitle>{surah.meaning}</ListCard.Subtitle>
              </ListCard.Content>
            </ListCard>
          </Link>
        ))}
      </QuranList.Content>
    </QuranList>
  );
};

export default SurahList;
