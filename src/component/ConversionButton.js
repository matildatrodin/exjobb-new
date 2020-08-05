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
            (this.props.wide ? "wide" : ""), 
            (this.props.orange ? "orange" : "")
        ].join(" ").trim();
        this.func = this.props.func;
    }

    handleClick = () => {
        var newContext = handleConversionInput(this.context, this.func);
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
