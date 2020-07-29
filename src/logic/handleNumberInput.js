import update from "./update";

export default function handleNumberInput (currentState, buttonName){

    if(!currentState.operation) {
        var xUpdate = { x: update(currentState.x, buttonName)};
        var newState = Object.assign(currentState, xUpdate);
        return newState;
        } else {
        var yUpdate = { y: update(currentState.y, buttonName)};
        var newState = Object.assign(currentState, yUpdate);
        return newState;
    }
}