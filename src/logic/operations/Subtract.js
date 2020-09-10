import OperationInterface from "./OperationInterface";

class Subtract extends OperationInterface {

    operation = (x,y) => {
        var result = +x - +y;
        return result.toString();
    }
}

let subtract = new Subtract().operation;

export default subtract;
