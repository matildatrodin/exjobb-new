import OperationInterface from "./OperationInterface";

class Multiply extends OperationInterface {

    operation = (x,y) => {
        var result = +x * +y;
        return result.toString();
    }
}

let multiply = new Multiply().operation;

export default multiply;