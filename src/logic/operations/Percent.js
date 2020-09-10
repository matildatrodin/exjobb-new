import OperationInterface from "./OperationInterface";

class Percent extends OperationInterface {

    operation = (z) => {
        var result = +z / 100;
        return result.toString();
    }
}

let percent = new Percent().operation;

export default percent;
