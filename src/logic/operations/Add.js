import OperationInterface from './OperationInterface';

class Add extends OperationInterface {

    operation = (x, y) => {
        var result = +x + +y;
        return result.toString();
    }
}

let add = new Add().operation;

export default add;
