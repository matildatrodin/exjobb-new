export default function deci(z) {
    if (z.includes(".")) {
        return z;
    } else {
        return z + ".";
    }
}