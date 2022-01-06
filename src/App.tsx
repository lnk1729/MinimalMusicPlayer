import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {RootNavigator} from './navigators';
import {persistor, store} from './state-management';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
