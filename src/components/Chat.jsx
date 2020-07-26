import React from 'react'
import './Chat.css'

const Chat = ({users, messages}) => {

    const [mesagesValue, setMessagesValue] = React.useState('')

    return (
        <div className="chat-wrapper">
            <div className="chat">
                <div className="chat-users users">
                    <div className="users-title">Online({ users.length })</div>
                    <div className="users-view user">
                        {users.map( (name, index) => <div key={ index } className="user-view">{ name }</div> )}
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
                        <textarea 
                            className="messages-textare"
                            value={mesagesValue}
                            onChange = { (e) => setMessagesValue(e.target.value) }
                        ></textarea>
                        <button className="messages-button">Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Chat