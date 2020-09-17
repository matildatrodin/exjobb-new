import React, { createContext, Component } from 'react';

export const CalculatorContext = createContext();

class CalculatorContextProvider extends Component {
    state = {
        x: null,
        y: null,
        operation: null,
    } 

    updateContext = (newContext) => {
        if(newContext === null) {
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