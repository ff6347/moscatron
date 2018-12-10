import * as React from 'react';
import {IMessage} from '../app';

const Message = (props: {message: IMessage}) => (
  <div className="mqtt__message" key={props.message.id.toString()}>
    <div className="mqtt__message-id">Message ID: <code>{props.message.id}</code></div>
    <div className="mqtt__client-id">Client ID: <code>{props.message.clientId}</code></div>
    <div className="mqtt__topic">Topic: <code>{props.message.topic}</code></div>
    <div className="mqtt__payload">Payload: <pre><code>{JSON.stringify(props.message.payload)}</code></pre></div>
  </div>
    );
export default Message;
