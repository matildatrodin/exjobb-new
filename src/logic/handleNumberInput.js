import update from "./operations/update";

export default function handleNumberInput (context, number){
    var newContext;

    if(!context.operation) {
        var xUpdate = { x: update(context.x, number)};
        newContext = Object.assign(context, xUpdate);
        return newContext;
    } else {
        var yUpdate = { y: update(context.y, number)};
        newContext = Object.assign(context, yUpdate);
        return newContext;
    }
}