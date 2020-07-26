import React from 'react'
import './Chat.css'

 function Chat() {
    return (
        <div className="chat-wrapper">
            <div className="chat">
                <div className="chat-users users">
                    <div className="users-title">Users(1):</div>
                    <div className="users-view user">
                        <div className="user-view">Test User</div>
                    </div>
                </div>
                <div className="chat-messages messages">
                    <div className="messages-box">
                        <div className="messages-box">
                            <p className="messages-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <span className="messages-name">User 1</span>
                        </div>
                    </div>
                    <div className="messages-inputs">
                        <textarea className="messages-textare"></textarea>
                        <button className="messages-button">Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Chat