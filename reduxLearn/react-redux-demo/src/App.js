import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import CakeContainer from './components/cakeContainer';
import HooksCakeContainer from './components/hooksCakesContainer';
import IceCreamContainer from './components/iceCreamContainer';
import NewCakeContainer from './components/newCakeContainer';
import ItemContainer from './components/itemContainer';
import UserContainer from './components/userContainer';

import './App.css';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
      
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;

  // <ItemContainer cake />
        // <ItemContainer />
        // <CakeContainer />
        // <HooksCakeContainer />
        // <IceCreamContainer />
        // <NewCakeContainer />
