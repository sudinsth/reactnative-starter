import React from 'react';

import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import RootNavigation from '@app/navigations/RootNavigations';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={styles.flex}>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
