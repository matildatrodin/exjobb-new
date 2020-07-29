import handleNumberInput from "./handleNumberInput";
import handleOperationInput from "./handleOperationInput";
import handleConversionInput from "./handleConversionInput";

export default function handleInput(currentState, buttonName, buttonType) {

    switch(buttonType) {
        case "number": 
            return handleNumberInput(currentState, buttonName);
        case "conversion":
            return handleConversionInput(currentState, buttonName);
        case "operation":
            return handleOperationInput(currentState, buttonName);
        default: 
        return currentState;
    }
}