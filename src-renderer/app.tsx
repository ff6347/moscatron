import * as React from "react";
import * as ReactDOM from "react-dom";
import Message from './components/Message';
import MessageStack from './components/MessageStack';
export interface IProps {
  greeting: string;
}

export interface IState {
  count: number;
    messages?: {
      clientId: string,
      topic: string,
      payload: string,
    };
}
class App extends React.Component<IProps, IState> {
   public state: Readonly<IState> = {
    count: 0,
  };
  public render() {
    return (
      <div>
        <button onClick={this.handleMessage}>get state</button>
        {/* <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          This button has been clicked {this.state.count} times.
        </button> */}
        <MessageStack messages={this.state.messages} />
      </div>
    );
  }
  private handleMessage = () => {
    // return 'foo';
    // tslint:disable-next-line:no-console
    console.log(this.state);
  }
}

ReactDOM.render(
  <App greeting="Hello, crude React world!" />,
  document.getElementById("main"),
);
