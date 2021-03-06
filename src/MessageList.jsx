import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    return (
      <main className="messages">
        {this.props.messages.map( (message)=> {return <Message keypass= {message.id} color={message.color} key={message.id} username= {message.username} content= {message.content}/>})}
      </main>
    );
  }
}

export default MessageList;