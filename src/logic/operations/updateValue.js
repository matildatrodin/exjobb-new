
function updateValue(z, button) {
    if (z === null) {
        return button;
    } else {
    return z + button;
    }
}

export default updateValue;