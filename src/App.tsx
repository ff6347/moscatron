import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component<{ greeting: string }, { count: number }> {
  public state = { count: 0 };
  public render() {
    return (
      <div>
        <h2>{this.props.greeting}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          This button has been clicked {this.state.count} times.
        </button>
      </div>
    );
  }
}
// foo
ReactDOM.render(
  <App greeting="Hello, crude React world!" />,
  document.getElementById("main"),
);
