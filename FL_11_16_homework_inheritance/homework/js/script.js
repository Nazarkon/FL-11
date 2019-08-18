function assign(target) {
    'use strict';
    if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
    }

    let to = Object(target);

    for (let index = 1; index < arguments.length; index++) {
        let nextSource = arguments[index];

        if (nextSource !== null && nextSource !== undefined) {
            for (let nextKey in nextSource) {
                // Avoid bugs when hasOwnProperty is shadowed
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                    to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    return to;
}

const defaults = {
    a: 123,
    b: 777
};
const options = {
    a: 456
};
const configs = assign({}, defaults, options); // => {a: 456, b: 777}
console.log(configs)