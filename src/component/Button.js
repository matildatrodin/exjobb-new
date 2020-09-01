import React from "react";
import "./Button.css";

class Button extends React.Component {

    constructor(props){
        super(props);
        this.className = 'component-button';
    }

  handleButtonInput = () => {
    throw new TypeError(this.constructor.name + ' must implement the handleButtonInput method!')
  }

  render() {
    throw new TypeError(this.constructor.name + ' must implement the render method!')
    return (
      <>
      </>
    );
  }
}

export default Button;