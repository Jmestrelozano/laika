import React from 'react';
import { Provider } from 'react-redux';
import LaikaApp from './LaikaApp';
import { store } from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <LaikaApp />
    </Provider>
  );
};

export default App;
