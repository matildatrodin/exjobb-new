import OperationInterface from "./OperationInterface";

class UpdateValue extends OperationInterface {

    operation = (z, button) => {
        if (z === null) {
            return button;
        } else {
        return z + button;
        }
    }
}

let updateValue = new UpdateValue().operation;

export default updateValue;
