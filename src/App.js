import './App.css';
import React, { useState, useContext } from 'react';

import { ColorContext } from './ColorContext';
import UseReducer from './UseReducer';
import UseReducer1 from './UseReducer1';
import UseReducer2 from './UseReducer2';

const UserAuth = React.createContext();

function MyComponent() {
  const {authorized, toggleAuthorization} = useContext(UserAuth);

  return (
    <div onClick={toggleAuthorization}>{authorized.toString()}</div>
  )
}

function App() {
  const colors = useContext(ColorContext);
  const [authorized, updateAuthorization] = useState(false);

  function toggleAuthorization() {
    updateAuthorization(!authorized);
    localStorage.setItem('authorized', (!authorized).toString())
  }

  
  return (
      <div>
        {authorized ? <h1>Logged in</h1> : <h1>Logged out</h1>}
        <UserAuth.Provider value={{authorized, toggleAuthorization}}>
          <MyComponent/>
          <ColorContext.Provider value={colors}>
            <div style={{backgroundColor: colors.blue}}>
              Hello World
            </div>
          </ColorContext.Provider>
        </UserAuth.Provider>
        <UseReducer />
        <UseReducer1 />
        <UseReducer2 />
      </div>
  );
}

export default App;
