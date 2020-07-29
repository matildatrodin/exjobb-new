import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = (buttonName, buttonType) => {
    console.log(buttonName);
    this.props.clickHandler(buttonName, buttonType);
  };

  render() {
    return (
      <div className="component-button-panel">
        <div>
          <Button name="AC" type="conversion" clickHandler={this.handleClick} />
          <Button name="+/-" type="conversion" clickHandler={this.handleClick} />
          <Button name="%" type="conversion" clickHandler={this.handleClick} />
          <Button name="÷" type="operation" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="7" type="number" clickHandler={this.handleClick} />
          <Button name="8" type="number" clickHandler={this.handleClick} />
          <Button name="9" type="number" clickHandler={this.handleClick} />
          <Button name="x" type="operation" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="4" type="number" clickHandler={this.handleClick} />
          <Button name="5" type="number" clickHandler={this.handleClick} />
          <Button name="6" type="number" clickHandler={this.handleClick} />
          <Button name="-" type="operation" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="1" type="number" clickHandler={this.handleClick} />
          <Button name="2" type="number" clickHandler={this.handleClick} />
          <Button name="3" type="number" clickHandler={this.handleClick} />
          <Button name="+" type="operation" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="0" type="number" clickHandler={this.handleClick} wide />
          <Button name="." type="conversion" clickHandler={this.handleClick} />
          <Button name="=" type="conversion" clickHandler={this.handleClick} orange />
        </div>
      </div>
    );
  }
}
