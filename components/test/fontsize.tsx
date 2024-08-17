'use client';
import { useAppSelector } from '@/hooks/reduxHook';
import { CSSProperties, ReactNode } from 'react';

interface FontsizeProps {
  children: ReactNode;
}

const FontSizeWrapper = ({ children }: FontsizeProps) => {
  const arabicFontSize = useAppSelector((state) => state.globalSettings.arabicFontSize);
  const translationFontSize = useAppSelector((state) => state.globalSettings.translationFontSize);
  const arabicFontFace = useAppSelector((state) => state.globalSettings.arabicFontFace);

  return (
    <span
      style={
        {
          '--arabic-font-face': arabicFontFace,
          '--arabic-font-size': `${arabicFontSize}px`,
          '--arabic-line-height': `${arabicFontSize * 2}px`,
          '--translation-font-size': `${translationFontSize}px`,
          display: 'contents', // This makes the span behave as if it's not there
          fontSize: 'inherit', // Ensure it doesn't affect font size
          lineHeight: 'inherit', // Ensure it doesn't affect line height
        } as CSSProperties
      }
    >
      {children}
    </span>
  );
};

export default FontSizeWrapper;
