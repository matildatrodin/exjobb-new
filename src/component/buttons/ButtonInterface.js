import React from "react";
import "./Button.css";

class ButtonInterface extends React.Component {

    constructor(props){
        super(props);
        this.className = 'component-button';
    }

  handleButtonInput = () => {
    throw new TypeError(this.constructor.name + ' must implement the handleButtonInput method!')
  }

  render() {
    throw new TypeError(this.constructor.name + ' must implement the render method!')
    // eslint-disable-next-line
    return (
      <>
      </>
    );
  }
}

export default ButtonInterface;