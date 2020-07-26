import React from 'react'
import './App.css'
import Login from './components/Login'
import reducer from './reducer.js'
import socket from './socket.js'
import Chat from './components/Chat'

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
  React.useEffect( () => {
    socket.on('ROOM:JOINED', users => {
      console.log('new pols', users)
    })
  }, [])

  console.log(state)

  return (
    <div className="app">
      <Chat />
        {/* { !state.isAuth ? <Login onLogin = {onLogin} /> : <Chat />  } */}
    </div>
  );
}

export default App;
