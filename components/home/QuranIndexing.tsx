import { surahList } from "@/data/quran-surah";
import { ListCard } from "../common/list-card";

const QuranIndexing = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {surahList.map((surah) => (
        <ListCard key={surah.id}>
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

export default QuranIndexing;
