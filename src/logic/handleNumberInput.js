import updateValue from "./operations/updateValue";

function handleNumberInput (context, number){
    var newContext;

    if(!context.operation) {
        var xUpdate = { x: updateValue(context.x, number)};
        newContext = Object.assign(context, xUpdate);
        return newContext;
    } else {
        var yUpdate = { y: updateValue(context.y, number)};
        newContext = Object.assign(context, yUpdate);
        return newContext;
    }
}

export default handleNumberInput;