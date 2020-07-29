import calculate from "./calculate";

export default function handleConversionInput (currentState, buttonName){

    if (!currentState.x) {
        return currentState;
    } else if(currentState.operation && currentState.y) {
        var result = { 
            x: calculate(currentState.x, currentState.y, currentState.operation),
            y: null,
            operation: buttonName,
        };
        var conversion = { 
            x: calculate(result.x, result.y, result.operation),
            y: null,
            operation: null,
        };
        var newState = Object.assign(currentState, conversion);
        return newState;
    } else {
        var conversion = { 
            x: calculate(currentState.x, currentState.y, buttonName),
            y: null,
            operation: null,
        };
        var newState = Object.assign(currentState, conversion);
        return newState;
        } 
}