import * as React from 'react';
import {IState} from '../app';

class MessageStack extends React.Component<{messages: any}, IState> {
  /**
   * render
   */
  public render() {
    return (
      <div className="MessageStack">
        {this.state}
      </div>
    );
  }
}

export default MessageStack;
