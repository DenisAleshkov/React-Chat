import React from 'react'
import socket from './../socket.js'

const  Login = () => {
    return (
        <div className="login">
          <div>
            <input type="text" placeholder="Room Id" />
            <input type="text" placeholder="Your Name" />
          </div>
          <button>Login</button>
        </div>
    )
}

export default Login;