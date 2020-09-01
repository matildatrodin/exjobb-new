import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import "./App.css";
import CalculatorContextProvider from '../context/CalculatorContext';

class App extends React.Component {

  render() {
    return (
      <div className="component-app">
        <CalculatorContextProvider>
          <Display />
          <ButtonPanel />
        </CalculatorContextProvider>
      </div>
    );
  }
}

export default App;
