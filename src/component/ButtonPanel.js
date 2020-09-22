import React from "react";
import "./ButtonPanel.css";
import add from "../logic/operations/Add";
import clearDisplay from "../logic/operations/ClearDisplay";
import convertNumber from "../logic/operations/ConvertNumber";
import addDecimal from "../logic/operations/AddDecimal";
import divide from "../logic/operations/Divide";
import equals from "../logic/operations/Equals";
import multiply from "../logic/operations/Multiply";
import squared from "../logic/operations/Squared";
import subtract from "../logic/operations/Subtract";
import NumberButton from './buttons/NumberButton';
import ConversionButton from './buttons/ConversionButton';
import OperationButton from './buttons/OperationButton';

class ButtonPanel extends React.Component {

  render() {
    return (
      <div className="component-button-panel">
        <div>
          <ConversionButton name="AC" func={clearDisplay} />
          <ConversionButton name="+/-" func={convertNumber} />
          <ConversionButton name="x&sup2;" func={squared} />
          <OperationButton name="÷" func={divide} orange />
        </div>
        <div>
          <NumberButton name="7"/>
          <NumberButton name="8" />
          <NumberButton name="9" />
          <OperationButton name="x" func={multiply} orange />
        </div>
        <div>
          <NumberButton name="4" />
          <NumberButton name="5" />
          <NumberButton name="6" />
          <OperationButton name="-" func={subtract} orange />
        </div>
        <div>
          <NumberButton name="1" />
          <NumberButton name="2" />
          <NumberButton name="3" />
          <OperationButton name="+" func={add} orange />
        </div>
        <div>
          <NumberButton name="0" wide />
          <ConversionButton name="." func={addDecimal} />
          <ConversionButton name="=" func={equals} orange />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
