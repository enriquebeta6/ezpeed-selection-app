import React from 'react';
import { Provider } from 'react-redux';
import store from './src/state/store/store.js';

import IndexApp from './src/IndexApp.js';
 
class App extends React.Component {
  render() { 
    return (
      <Provider store={store}>
        <IndexApp />
      </Provider>
    );
  }
}

export default App;