let doubleTheNumber = x=>2*x;
const compose = (...functions) =>
functions.reduce((accumulation, fn)=>
(..args) => accumulation(fn(..args), x=>x));

const filter = predicate => reducer => {
  return  (accumulation, value) =>{
    if(predicate(value)) return reducer(accumulation, value);
    return accumulation;
  }
}

const map = xf => reducer=>{
  return (accumulation, value) =>{
    console.log(accumulation, 'in map');
    reducer(accumulation, xf(value));
    return accumulation;

  }
}
const pushReducer = (accumulation, value) =>{
  console.log(accumulation, 'in pushReducer');
  accumulation.push(value);
  return accumulation;
}
const doubleTheMap = map(doubleTheNumber);
const isEven = filter(x =>x%2===0);
const isNot2 = filter(val=>val!=2);
[1,2,3].reduce(isNot2(isEven(doubleTheMap(pushReducer))), []);
[1,2,3].reduce(isNot2(doubleTheMap(pushReducer)), []);
[1,2,3].reduce(doubleTheMap(isNot2(pushReducer)), []);
