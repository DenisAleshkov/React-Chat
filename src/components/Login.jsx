import React from 'react'
import axios from 'axios'
import socket from './../socket.js'


const  Login = ({ onLogin }) => {
  const [roomId, setRoomId] = React.useState('')
  const [userName, setUserName] = React.useState('')
  const [isLoading, setLoading] = React.useState(false)

  const onEnter = async () => {
    if(!roomId || !userName){
      return alert('Неверные данные')
    }
    const obj = {
      roomId,
      userName
    }
    setLoading(true)
    await axios.post('/rooms',{
      roomId,
      userName
    })
    onLogin(obj)
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
          <button disabled={isLoading} onClick = { onEnter }>{isLoading ? 'ВХОД...' : 'ВОЙТИ'}</button>
        </div>
    )
}

export default Login;