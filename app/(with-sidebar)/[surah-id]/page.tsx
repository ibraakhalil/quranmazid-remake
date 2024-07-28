import {
  ArabicContent,
  AyahCard,
  AyahTranslation,
} from "@/components/ayah-page/ayah-card";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

const page = () => {
  return (
    <div className="px-7">
      {arr.map((item) => (
        <AyahCard key={item}>
          <AyahCard.ActionBar />
          <AyahCard.Content>
            <ArabicContent />
            <AyahTranslation />
          </AyahCard.Content>
        </AyahCard>
      ))}
    </div>
  );
};

export default page;
