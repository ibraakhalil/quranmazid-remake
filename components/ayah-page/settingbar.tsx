'use client';
import { Accordion } from '@/components/common/accordion';
import SettingSvg from '@/components/svg/SettingSvg';
import { useAppDispatch } from '@/hooks/reduxHook';
import {
  setArabicFontFace,
  setArabicFontSize,
  setTranslationFontSize,
  setTranslations,
} from '@/store/features/global-settings';
import { ChangeEvent } from 'react';

const SettingBar = () => {
  const dispatch = useAppDispatch();

  const handleArabicFontSize = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setArabicFontSize(e.target.value));
  };

  const handleTranslationFontSize = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTranslationFontSize(e.target.value));
  };

  const handleTranslations = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTranslations('Mujibur Rahman'));
  };

  const handleFontFace = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setArabicFontFace(e.target.value));
  };

  return (
    <div className="flex h-full flex-col py-4 ps-7 [padding-right:24px]">
      <Accordion>
        <Accordion.Trigger>
          <div className="flex select-none items-center gap-3">
            <SettingSvg />
            <span>Reading Settings</span>
          </div>
        </Accordion.Trigger>
        <Accordion.Content>
          <h3>Translations</h3>
          <div className="flex flex-row-reverse items-center gap-3">
            <label htmlFor="translation">Sahih International</label>
            <input name="translation" type="checkbox" onChange={handleTranslations} />
          </div>
        </Accordion.Content>
      </Accordion>
      <Accordion>
        <Accordion.Trigger>
          <div className="flex select-none items-center gap-3">
            <SettingSvg />
            <span>Font Settings</span>
          </div>
        </Accordion.Trigger>
        <Accordion.Content>
          <div className="flex flex-col gap-3">
            <label htmlFor="fontsize">Arabic Font Size</label>
            <input type="range" onChange={handleArabicFontSize} min={14} max={44} name="fontsize" id="fontsize" />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="fontsize">Translation Font Size</label>
            <input type="range" onChange={handleTranslationFontSize} min={14} max={26} name="fontsize" id="fontsize" />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="fontface">Font Face</label>
            <select name="fontface" id="fontface" onChange={handleFontFace}>
              <option value="AmiriQuran">Amiri Quran</option>
              <option value="kfg">KFG font</option>
            </select>
          </div>
        </Accordion.Content>
      </Accordion>
    </div>
  );
};

export default SettingBar;
