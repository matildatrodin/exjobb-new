
function handleConversionInput (context, input){
    var conversion;
    var newContext;

    if (!context.x) {
        return null;
    } else if(context.operation && context.y) {
        var result = context.operation(context.x, context.y);
        conversion = { 
            x: input(result),
            y: null,
            operation: null,
        };
        newContext = Object.assign(context, conversion);
        return newContext;
    } else {
        conversion = { 
            x: input(context.x, context.y, context.operation),
            y: null,
            operation: null,
        };
        newContext = Object.assign(context, conversion);
        return newContext;
        } 
}

export default handleConversionInput;