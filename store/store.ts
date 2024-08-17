import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import globalSettings from './features/global-settings';
import testSlice from './features/testSlice';
import postsSlice from './features/post-fetching';

const globalSettingsPersistConfig = {
  key: 'globalSettings',
  storage: storage,
};

export const makeStore = () => {
  return configureStore({
    reducer: {
      test: testSlice,
      posts: postsSlice,
      globalSettings: persistReducer(globalSettingsPersistConfig, globalSettings),
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
