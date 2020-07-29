import add from "./add.js";
import sub from "./sub.js";
import div from "./div.js";
import multi from "./multi.js";
import perc from "./perc.js";
import conv from "./conv.js";
import deci from "./deci.js";
import clear from "./clear.js";

export default function calculate(x, y, operation) {

    switch(operation) {
        case "+":
           return add(x,y);
        case "-":
            return sub(x,y);
        case "÷":
            return div(x,y);
        case "x":
            return multi(x,y);
        case "%":
            return perc(x);
        case "+/-":
            return conv(x);
        case ".":
            return deci(x);
        case "AC": 
            return clear();
        default: 
            return x;
}
}