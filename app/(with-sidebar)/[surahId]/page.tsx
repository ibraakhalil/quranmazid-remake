import { ArabicContent } from '@/components/ayah-page/arabic-content';
import { AyahCard } from '@/components/ayah-page/ayah-card';
import { AyahTranslation } from '@/components/ayah-page/ayah-translation';
import SurahTitleCard from '@/components/ayah-page/surah-title-card';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
interface SurahPage {
  params: {
    surahId: string;
  };
}

const page = ({ params }: SurahPage) => {
  return (
    <div className="[--padding-x:24px]">
      <SurahTitleCard surahId={params.surahId} />
      <div className="px-[--padding-x]">
        {arr.map((item) => (
          <AyahCard key={item}>
            <AyahCard.ActionBar />
            <AyahCard.Content className="flex flex-col gap-3">
              <ArabicContent />
              <AyahTranslation />
            </AyahCard.Content>
          </AyahCard>
        ))}
      </div>
    </div>
  );
};

export default page;
