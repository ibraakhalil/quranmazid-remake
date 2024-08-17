import { surahList, SurahListType } from '@/data/quran-surah';

interface SurahTitleCardProps {
  surahId: string;
}

const SurahTitleCard = ({ surahId }: SurahTitleCardProps) => {
  const id = parseInt(surahId, 10);
  const surah: SurahListType | undefined = surahList.find((item) => item.id === id);

  return (
    <div className="flex h-[120px] items-center justify-center bg-slate-100">
      <div className="space-y-1 text-center">
        <h1 className="text-3xl font-semibold">{surah?.name}</h1>
        <p className="text-sm text-subtitle-color">Ayah-7, {surah?.revelation_place}</p>
      </div>
    </div>
  );
};

export default SurahTitleCard;
