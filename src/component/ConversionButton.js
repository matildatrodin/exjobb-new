import React from 'react';
import "./Button.css";
import Button from "./Button";
import handleConversionInput from "../logic/handleConversionInput";
import { CalculatorContext } from "../context/CalculatorContext";

export default class ConversionButton extends Button {
    
    static contextType = CalculatorContext;

    constructor(props){
        super(props);
        this.className = [this.className, 
            (props.wide ? "wide" : ""), 
            (props.orange ? "orange" : "")
        ].join(" ").trim();
        this.func = props.func;
        this.name = props.name
    }

    handleButtonInput = () => {
        var newContext = handleConversionInput(this.context, this.func);
        this.context.updateContext(newContext);
      }

      render(){
          return( 
            <div className={this.className}>
                <button onClick={this.handleButtonInput}>{this.name}</button>
            </div>
          )
      }

}
