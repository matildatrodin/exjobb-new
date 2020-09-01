import React, { createContext, Component } from 'react';

export const CalculatorContext = createContext();

class CalculatorContextProvider extends Component {
    state = {
        x: null,
        y: null,
        operation: null,
    } 

    updateContext = (newContext) => {
        console.log("updating context");
        if(newContext === null) {
            console.log("no new context");
            return null;
        } else {
            this.setState({
                x: newContext.x,
                y: newContext.y,
                operation: newContext.operation,
            })
        }
    }

    render() {
        console.log(this.state);
        return (
            <CalculatorContext.Provider value={{
                ...this.state, 
                updateContext: this.updateContext,
            }}>
                {this.props.children}
            </CalculatorContext.Provider>
        );
    }
}

export default CalculatorContextProvider;