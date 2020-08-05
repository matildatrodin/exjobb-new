export default function update(z, button) {
    if (z === null) {
        return button;
    } else {
    return z + button;
    }
}