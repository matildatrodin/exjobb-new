export default function div(x,y) {
    if (y === "0") {
        return("err")
    } else {
        var result = +x / +y;
        return result.toString();
    }
}