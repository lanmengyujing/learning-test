import {
    isPlainObject,
    entries
} from 'lodash';

let transduce = (xf, reducer, seed, collection) => {
    const transformedReducer = xf(reducer);
    let accumulation = seed;
    for (const value of collection) {
        accumulation = transformedReducer(accumulation, value);
    }
}

transduce(compose(isNot2, isEven, doubleMap), pushReducer, [], [1, 2, 3, 4]);

let objectReducer = (obj, value) => Object.assign(obj, value);

let into = (to, xf, collection) => {
    if (Array.isArray(to)) return transduce(xf, pushReducer, to, collection);
    else if (isPlainObject(to)) return transduce(xf, objectReducer, to, collection);
    throw new Error('into only support arrays and objects as to');
}

into([], compose(map(x => x / 2)), [1, 2, 3, 4]);

into([], map(val => ({
    [val]: val
})), [1, 2, 3, 4, 'hello', () => "world"]);

let transduce = (xf, reducer, seed, _collection) => {
    const transformedReducer = xf(reducer);
    let accumulation = seed;
    const collection = isPlainObject(_collection) ? entries(_collection) : _collection;
    for (let value of collection) {
        accumulation = transformedReducer(accumulation, value);
    }
}

ObjectValues = obj => {
    return into([], map(kv => kv[1]), obj);
}

let seq = (xf, collection) =>{
  if (Array.isArray(collection)) return transduce(xf, pushReducer, [], collection);
  else if (isPlainObject(collection)) return transduce(xf, objectReducer, {}, collection);
  throw new Error('unsupport collection type');
}
let flip = map((k,v)=>({[v]: k}));
seq(flip, {one: 1, two: 2});
