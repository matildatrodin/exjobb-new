export default function equ(x, y, operation) {
    if(!operation) {
        return x;
    } else {
        var result = operation(x, y);
        return result.toString();
    }
};