'use client';
import { useAppSelector } from '@/hooks/reduxHook';

interface TranslationItemProps {
  name: string;
}

export function AyahTranslation() {
  const translations = useAppSelector((state) => state.globalSettings.translations);

  return (
    <div className="space-y-2">
      {translations.map((translation) => (
        <TranslationItem name={translation} key={translation} />
      ))}
    </div>
  );
}

function TranslationItem({ name }: TranslationItemProps) {
  return (
    <div className="space-y-1">
      <h3 className="text-sm uppercase text-subtitle-color">{name}</h3>
      <p style={{ fontSize: 'var(--translation-font-size)' }}>
        distinctio at amet iure sapiente, vel tempore atque qui blanditiis, dolorum aspernatur. Quasi culpa nesciunt
        reiciendis tempora?
      </p>
    </div>
  );
}
