
function handleOperationInput (context, input){
    var newContext;

    if (!context.x) {
        return null;
    } else if (context.operation && context.y) {
        var result = {
            x: context.operation(context.x, context.y),
            y: null,
            operation: input,
            input: null,
        };
        newContext = Object.assign(context, result);
        return newContext;
    } else {
        var operationUpdate = { 
            operation: input,
        };
        newContext = Object.assign(context, operationUpdate);
        return newContext;
    }
}

export default handleOperationInput;