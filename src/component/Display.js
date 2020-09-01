import React from "react";
import { CalculatorContext } from "../context/CalculatorContext";

import "./Display.css";

class Display extends React.Component {
  static contextType = CalculatorContext;

  render() {
    const { x, y } = this.context;

    return (
      <div className="component-display">
        <div>{ y || x || "0" }</div>
      </div>
    );
  }
}

export default Display;
