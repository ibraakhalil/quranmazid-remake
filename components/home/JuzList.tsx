import { surahList } from '@/data/quran-surah';
import { useFuzzySearch } from '@/hooks/useFuzzySearch';
import { groupSurahByJuz } from '@/utils/group-surah-by-juz';
import { ChangeEvent } from 'react';
import { ListCard } from '../common/list-card';
import { QuranList } from '../common/list-quran';
const juzArray = Object.entries(groupSurahByJuz(surahList)).map(([juz, surahs]) => ({
  juz: Number(juz),
  surahs,
}));

export default function JuzList() {
  const [results, setSearchValue] = useFuzzySearch(juzArray, {
    keys: ['surahs.name', 'juz'],
    threshold: 0.3,
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <QuranList>
      <QuranList.Search className="me-[--padding-right]" onChange={handleSearch} />
      <QuranList.Content className="pe-[--padding-right]">
        {results.map((juz) => (
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
      </QuranList.Content>
    </QuranList>
  );
}
