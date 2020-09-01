import React from "react";
import "./ButtonPanel.css";
import add from "../logic/operations/add";
import clearDisplay from "../logic/operations/clearDisplay";
import convertNumber from "../logic/operations/convertNumber";
import deci from "../logic/operations/addDecimal";
import divide from "../logic/operations/divide";
import equals from "../logic/operations/equals";
import multiply from "../logic/operations/multiply";
import percent from "../logic/operations/percent";
import subtract from "../logic/operations/subtract";
import NumberButton from './NumberButton';
import ConversionButton from './ConversionButton';
import OperationButton from './OperationButton';

class ButtonPanel extends React.Component {

  render() {
    return (
      <div className="component-button-panel">
        <div>
          <ConversionButton name="AC" func={clearDisplay} />
          <ConversionButton name="+/-" func={convertNumber} />
          <ConversionButton name="%" func={percent} />
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
          <ConversionButton name="." func={deci} />
          <ConversionButton name="=" func={equals} orange />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
