import OperationInterface from "./OperationInterface";

class ClearDisplay extends OperationInterface {
    
    operation = () => {
        return null;
    }
}

let clearDisplay = new ClearDisplay().operation;

export default clearDisplay;
