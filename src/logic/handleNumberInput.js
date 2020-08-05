import update from "./operations/update";

export default function handleNumberInput (context, number){
    console.log(context);

    if(!context.operation) {
        var xUpdate = { x: update(context.x, number)};
        var newContext = Object.assign(context, xUpdate);
        return newContext;
    } else {
        var yUpdate = { y: update(context.y, number)};
        var newContext = Object.assign(context, yUpdate);
        return newContext;
    }
}