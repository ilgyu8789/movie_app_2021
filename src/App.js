import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    // 바꾸고 싶은 데이터는 state 안에 넣는다
    count: 0,
  };

  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };
  render() {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
