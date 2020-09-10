import OperationInterface from "./OperationInterface";

class Divide extends OperationInterface {
    
    operation = (x,y) => {
        if (y === "0") {
            return("err")
        } else {
            var result = +x / +y;
            return result.toString();
        }
    }
}

let divide = new Divide().operation;

export default divide;
