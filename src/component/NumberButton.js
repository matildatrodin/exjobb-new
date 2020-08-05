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
            (this.props.wide ? "wide" : "")
        ].join(" ").trim();
        this.number = this.props.name;
    }

    handleClick = () => {
        var newContext = handleNumberInput(this.context, this.number);
        this.context.updateContext(newContext);
      }

      render(){
          return( 
            <>
                {super.render(<button onClick={this.handleClick}>{this.props.name}</button>)}
            </>
          )
      }

}
