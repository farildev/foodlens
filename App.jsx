import React from 'react';
import RootNavigation from '@/navigations/RootNavigation';
import FontLoader from '@/hocs/FontLoader';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/store/store';
import { Provider } from 'react-redux';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <SafeAreaProvider>
              <FontLoader>
                <RootNavigation />
              </FontLoader>
            </SafeAreaProvider>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  )
}

export default App