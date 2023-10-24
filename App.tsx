import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppStack from './src/navigation/AppStack';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}

export default App;
