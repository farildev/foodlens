import React from 'react';
import RootNavigation from '@/navigations/RootNavigation';
import FontLoader from '@/hocs/FontLoader';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const App = () => {
  return (
    <GestureHandlerRootView style={{flex : 1}}>
      <SafeAreaProvider>
        <FontLoader>
          <RootNavigation />
        </FontLoader>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

export default App