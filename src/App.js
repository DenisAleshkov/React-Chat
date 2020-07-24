import React from 'react'
import './App.css'
import Login from './components/Login'
import reducer from './reducer.js'
import socket from './socket.js'

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    isAuth: false,
    roomId: null,
    userName: null
  })

  const onLogin = (obj) => {
    dispatch({
      type: 'IS_AUTH',
      payload: obj
    })
    socket.emit('ROOM:AUTH', obj)
  }

  console.log(state)

  return (
    <div className="app">
        { !state.isAuth && <Login onLogin = {onLogin} /> }
    </div>
  );
}

export default App;
