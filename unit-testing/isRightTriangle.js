const isTriangle = require('./isTriangle');

function isRightTriangle(a, b, c) {
    return isTriangle(a,b,c) && ((c*c == a*a + b*b)||(b*b == a*a + c*c)||(a*a == b*b + c*c));
}

module.exports = isRightTriangle;