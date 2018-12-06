import * as React from 'react';
export interface IMessageProps {
  clientId: string;
  topic: string;
  payload: string;
}
const Message = (props: IMessageProps) => (
  <div className="Message">
      <div className="clientId">{props.clientId}</div>
      <div className="topic">{props.topic}</div>
      <div className="payload">
        <pre>
          <code>
            {JSON.stringify(props.payload)}
          </code>
        </pre>
      </div>
      </div>
    );
export default Message;
// class Message extends React.Component<IMessageProps, {}> {
//   public render() {
//     return (
//       <div className="Message">
//       <div className="clientId">{this.props.clientId}</div>
//       <div className="topic">{this.props.topic}</div>
//       <div className="payload">
//       {JSON.stringify(this.props.payload)}
//       </div>
//       </div>
//     );
//   }
// }

// export default Message;
