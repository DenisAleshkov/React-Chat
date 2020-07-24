import React from 'react'
import axios from 'axios'
import socket from './../socket.js'

const  Login = () => {
  const [roomId, setRoomId] = React.useState('')
  const [userName, setUserName] = React.useState('')

  const onEnter = () => {
    if(!roomId || !userName){
      return alert('Неверный данные')
    }
    axios.post('/rooms',{
      roomId,
      userName
    });
  }

    return (
        <div className="login">
          <div>
            <input 
              type="text" 
              placeholder="Room Id" 
              value={roomId} 
              onChange={ e => setRoomId(e.target.value) } 
              />
            <input 
              type="text" 
              placeholder="Your Name" 
              value={userName}
              onChange={ e => setUserName(e.target.value) }
              />
          </div>
          <button onClick = { onEnter }>Login</button>
        </div>
    )
}

export default Login;