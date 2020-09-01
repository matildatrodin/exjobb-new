import OperationInterface from "./OperationInterface";

class ConvertNumber extends OperationInterface {

    operation = (z) => {
        return (-1 * parseFloat(z)).toString();
    }
}

let convertNumber = new ConvertNumber().operation;

export default convertNumber;