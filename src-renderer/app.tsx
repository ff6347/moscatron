import { ipcRenderer } from 'electron';
import * as React from "react";
import * as ReactDOM from "react-dom";
import MessageStack from './components/MessageStack';
import Status from './components/Status';

export interface IProps {
  greeting: string;
}

export interface IMessage {
    clientId: string;
    id: number;
    topic: string;
    payload: string;

}
export interface IState {
  count: number;
  port: number;
  messages?: IMessage[];
  publistener?: () => void;
}
class App extends React.Component<IProps, IState> {
   public state: Readonly<IState> = {
    count: 0,
    port: 1883,
  };
  public publistener = (event: any, args: any) => {
    this.setState({count: this.state.count + 1});
    if (this.state.messages !== undefined) {
      const messages = [...this.state.messages, {
        clientId: args.clientId,
        id: this.state.count,
        payload: args.payload,
        topic: args.topic,
      }];
      this.setState({messages});
    } else {
      this.setState({
        messages: [
          {
        clientId: args.clientId,
        id: this.state.count,
        payload: args.payload,
        topic: args.topic},
      ],
    });
    }
  }
  public componentDidMount() {
    ipcRenderer.on('published', this.publistener);
  }
  public componentWillUnmount() {
    ipcRenderer.removeAllListeners('published');
  }
  public render() {
    return (
      <div>
        <Status port={this.state.port}/>
        {/* <button onClick={this.handleMessage}>get state</button> */}
        <MessageStack messages={this.state.messages} />
      </div>
    );
  }
  // private handleMessage = () => {
  //   // return 'foo';
  //   // tslint:disable-next-line:no-console
  //   console.log(this.state);
  // }
}

ReactDOM.render(
  <App greeting="Hello, crude React world!" />,
  document.getElementById("main"),
);
