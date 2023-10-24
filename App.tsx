import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';

import AppStack from './src/navigation/AppStack';
import colors from './src/theme/colors';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
      <AppStack />
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

export default App;
