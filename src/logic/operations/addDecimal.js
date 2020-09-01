
function addDecimal(z) {
    if (z.includes(".")) {
        return z;
    } else {
        return z + ".";
    }
}

export default addDecimal;