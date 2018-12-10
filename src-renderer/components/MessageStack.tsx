import * as React from 'react';
import {IMessage} from '../app';
import Message from './Message';
export interface IMessageStackProps {
  messages?: IMessage[];
}
class MessageStack extends React.Component<IMessageStackProps, {}> {
  public render() {
    if (this.props.messages === undefined) {
      return <div className="message-stack"></div>;
    } else {
      return (
      <div className="message-stack">
        {this.props.messages.slice(0).reverse().map((ele) => <Message message={ele} />)}
      </div>
      );
    }
  }
}

export default MessageStack;
