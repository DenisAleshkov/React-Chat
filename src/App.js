import React from 'react'
import axios from 'axios'
import './App.css'
import Login from './components/Login'
import reducer from './reducer.js'
import socket from './socket.js'
import Chat from './components/Chat'

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    isAuth: false,
    roomId: null,
    userName: null,
    users: [],
    messages: []
  })

  const onLogin = async (obj) => {
    dispatch({
      type: 'IS_AUTH',
      payload: obj
    })
    socket.emit('ROOM:AUTH', obj)
    const { data } = await axios.get(`/rooms/${obj.roomId}`)
    setUsers(data.users)
  }

  const setUsers = (users) => {
    dispatch({
      type: 'SET_USERS',
      payload: users
    })
  }

  React.useEffect( () => {
    socket.on('ROOM:SET_USERS', setUsers)
  }, [])

  return (
    <div className="app">
        { !state.isAuth ? <Login onLogin = {onLogin} /> : <Chat  { ...state } />  }
    </div>
  );
}

export default App;
