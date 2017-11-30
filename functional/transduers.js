let doubleTheNumber = x => 2 * x;


const filter = predicate => reducer => {
    return (accumulation, value) => {
        if (predicate(value)) return reducer(accumulation, value);
        return accumulation;
    }
}

const map = xf => reducer => {
    return (accumulation, value) => {
        console.log(accumulation, 'in map');
        reducer(accumulation, xf(value));
        return accumulation;

    }
}
const pushReducer = (accumulation, value) => {
    console.log(accumulation, 'in pushReducer');
    accumulation.push(value);
    return accumulation;
}
const doubleMap = map(doubleTheNumber);
const isEven = filter(x => {
    console.log("in isEven", x);
    return x % 2 === 0
});
const isNot2 = filter(val => {
    console.log("in isNot2", val);
    return val != 2
});

[1, 2, 3].reduce(isNot2(isEven(doubleTheMap(pushReducer))), []);
[1, 2, 3].reduce(isNot2(doubleTheMap(pushReducer)), []);
[1, 2, 3].reduce(doubleTheMap(isNot2(pushReducer)), []);


const compose = (...functions) =>
    functions.reduce((accumulation, fn) =>
        (...args) => accumulation(fn(...args), x => x));


[1, 2, 3, 4].reduce(isNot2(isEven(doubleMap(pushReducer))), []) // this was [8]

[1, 2, 3, 4].reduce(compose(isNot2, isEven, doubleMap)(pushReducer), []) // this is [8]
[1, 2, 3, 4].reduce(compose(doubleMap, isEven, isNot2)(pushReducer), []) // this is [4,6,8]
