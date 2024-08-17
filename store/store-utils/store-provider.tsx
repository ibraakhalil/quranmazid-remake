'use client';
import { AppStore, makeStore } from '@/store/store';
import { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';

function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      {/* <PersistGate persistor={persistStore(storeRef.current)}>{children}</PersistGate> */}
      {children}
    </Provider>
  );
}

export default StoreProvider;
