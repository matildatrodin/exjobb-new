
export default function handleConversionInput (context, input){

    if (!context.x) {
        return null;
    } else if(context.operation && context.y) {
        var result = { 
            x: context.operation(context.x, context.y),
            y: null,
            operation: input,
        };
        var conversion = { 
            x: context.operation(context.x, context.y),
            y: null,
            operation: null,
        };
        var newContext = Object.assign(context, conversion);
        return newContext;
    } else {
        var conversion = { 
            x: input(context.x, context.y, context.operation),
            y: null,
            operation: null,
        };
        var newContext = Object.assign(context, conversion);
        return newContext;
        } 
}