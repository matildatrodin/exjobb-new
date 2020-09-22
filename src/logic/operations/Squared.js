import OperationInterface from "./OperationInterface";

class Squared extends OperationInterface {

    operation = (z) => {
        var result = z*z;
        return result.toString();
    }
}

let squared = new Squared().operation;

export default squared;
