import calculate from "./calculate";

export default function handleOperationInput (currentState, buttonName){

    if (!currentState.x) {
        return currentState;
    } else if (currentState.operation && currentState.y) {
        var result = {
            x: calculate(currentState.x, currentState.y, currentState.operation),
            y: null,
            operation: buttonName,
            buttonName: null,
            buttonType: null,
        };
        var newState = Object.assign(currentState, result);
        return newState;
    } else {
        var result = { 
            operation: buttonName,
        };
        var newState = Object.assign(currentState, result);
        return newState;
    }
}