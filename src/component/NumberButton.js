import React from 'react';
import "./Button.css";
import Button from "./Button";
import handleNumberInput from "../logic/handleNumberInput";
import { CalculatorContext } from "../context/CalculatorContext";

export default class NumberButton extends Button {
    
    static contextType = CalculatorContext;

    constructor(props){
        super(props);
        this.className = [this.className, 
            (props.wide ? "wide" : "")
        ].join(" ").trim();
        this.number = props.name;
    }

    
    handleButtonInput = () => {
        var newContext = handleNumberInput(this.context, this.number);
        this.context.updateContext(newContext);
      }

      render(){
          return( 
            <div className={this.className}>
                <button onClick={this.handleButtonInput}>{this.number}</button>
            </div>
          )
      }
}
