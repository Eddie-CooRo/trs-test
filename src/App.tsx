import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from 'store';
import { enableScreens } from 'react-native-screens';
import Loading from 'view/components/Loading';
import Navigator from 'routes';

enableScreens();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <Navigator />
    </PersistGate>
  </Provider>
);

export default App;
