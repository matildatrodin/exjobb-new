import OperationInterface from "./OperationInterface";

class Equals extends OperationInterface {

    operation = (x, y, operation) => {
        if(!operation) {
            return x;
        } else {
            var result = operation(x, y);
            return result.toString();
        }
    }
}

let equals = new Equals().operation;

export default equals;
