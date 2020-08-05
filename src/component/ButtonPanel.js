import React from "react";
import "./ButtonPanel.css";
import add from "../logic/operations/add";
import clear from "../logic/operations/clear";
import conv from "../logic/operations/conv";
import deci from "../logic/operations/deci";
import div from "../logic/operations/div";
import equ from "../logic/operations/equ";
import multi from "../logic/operations/multi";
import perc from "../logic/operations/perc";
import sub from "../logic/operations/sub";
import NumberButton from './NumberButton';
import ConversionButton from './ConversionButton';
import OperationButton from './OperationButton';

export default class ButtonPanel extends React.Component {

  render() {
    return (
      <div className="component-button-panel">
        <div>
          <ConversionButton name="AC" func={clear} />
          <ConversionButton name="+/-" func={conv} />
          <ConversionButton name="%" func={perc} />
          <OperationButton name="÷" func={div} orange />
        </div>
        <div>
          <NumberButton name="7"/>
          <NumberButton name="8" />
          <NumberButton name="9" />
          <OperationButton name="x" func={multi} orange />
        </div>
        <div>
          <NumberButton name="4" />
          <NumberButton name="5" />
          <NumberButton name="6" />
          <OperationButton name="-" func={sub} orange />
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
          <ConversionButton name="=" func={equ} orange />
        </div>
      </div>
    );
  }
}
