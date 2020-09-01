import OperationInterface from "./OperationInterface";

class AddDecimal extends OperationInterface {

    operation = (z) => {
        if (z.includes(".")) {
            return z;
        } else {
            return z + ".";
        }
    }
}

let addDecimal = new AddDecimal().operation;

export default addDecimal;