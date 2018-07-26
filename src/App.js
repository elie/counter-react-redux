import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  increment = () => {
    this.props.dispatch({
      type: "INCREMENT"
    });
  };
  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <h2>The count is: {this.props.count}</h2>
        <h3>
          Hey Jimmy your favorite number is {this.props.jimmysFavoriteNumber}
        </h3>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    jimmysFavoriteNumber: state.count,
    count: state.count
  };
}

export default connect(mapStateToProps)(App); // gives you dispatch on this.props
