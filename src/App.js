import React from 'react';
import './App.css';
import Login from './components/Login';

// const socket = io('http://localhost:9999/rooms');



function App() {

  const connect = () => {
    io('http://localhost:9999/rooms');
  }

  return (
    <div className="app">
      <div className="app-window window">
        <div className="window-users user">
         <Login />
        </div>
      </div> 
    </div>
  );
}

export default App;
