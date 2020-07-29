import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import "./App.css";
import handleInput from "../logic/handleInput";

export default class App extends React.Component {
  state = {
    x: null,
    y: null,
    operation: null,
    buttonName: null,
    buttonType: null,
  };

  handleClick = (buttonName, buttonType) => {
    this.setState(handleInput(this.state, buttonName, buttonType));
  }

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.x || this.state.y || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
