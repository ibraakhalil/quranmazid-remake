import { createSlice } from '@reduxjs/toolkit';

export interface GlobalSettingsState {
  arabicFontSize: number;
  arabicFontFace: string;
  translationFontSize: number;
  translations: string[];
}

const initialState: GlobalSettingsState = {
  arabicFontSize: 14,
  arabicFontFace: 'amiriquran',
  translationFontSize: 14,
  translations: ['sahih international'],
};

export const globalSettings = createSlice({
  name: 'Global Settings',
  initialState,
  reducers: {
    setArabicFontSize: (state, action) => {
      state.arabicFontSize = action.payload;
    },
    setArabicFontFace: (state, action) => {
      state.arabicFontFace = action.payload;
    },
    setTranslationFontSize: (state, action) => {
      state.translationFontSize = action.payload;
    },
    setTranslations: (state, action) => {
      const hasTranslation = state.translations.includes(action.payload);
      if (hasTranslation) {
        state.translations = state.translations.filter((translation) => translation !== action.payload);
      } else {
        state.translations = [...state.translations, action.payload];
      }
    },
  },
});

export default globalSettings.reducer;

export const { setArabicFontSize, setArabicFontFace, setTranslationFontSize, setTranslations } = globalSettings.actions;
