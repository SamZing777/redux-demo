import React from 'react';
import { Provider } from 'react-redux';

import store from './components/redux/store';
import CakeContainer from './components/cakeContainer';
import HooksCakeContainer from './components/hooksCakesContainer';

import './App.css';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
