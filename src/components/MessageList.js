import React from 'react';
import '../App.css';
import Message from './Message.js'

const MessageList = (props) => {
    return (
        props.messages.map(message => {
            return <Message message={message} messageRead={props.messageRead} messageSelected={props.messageSelected}></Message>
        })
    );
}

export default MessageList;
