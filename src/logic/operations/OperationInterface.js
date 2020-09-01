
class OperationInterface {

    operation = () => {
        throw new TypeError(
            this.constructor.name + ' must implement the operation method!'
        );
    }
}

export default OperationInterface;