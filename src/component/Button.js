import React from "react";
import "./Button.css";

export default class Button extends React.Component {

    constructor(props){
        super(props);
        this.className = 'component-button';
    }

  render(args) {

    return (
      <div className={this.className}>
        {this.props.children}
        {args}
      </div>
    );
  }
}