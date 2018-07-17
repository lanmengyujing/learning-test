//Learn Async
//https://blog.risingstack.com/mastering-async-await-in-nodejs/

async function test() {
    return 30;
}
console.log(test());


// 定义一个返回Promise对象的函数
function resolveLater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("resolve in 1 second");
            resolve(1);
        }, 1000);
    })
}

(async function() {
    const value = await resolveLater();
    console.log("Yey, story successfully loaded!", value);
}());

async function asyncFun() {
    var value = await Promise
        .resolve(1)
        .then(x => x * 3)
        .then(x => x + 5)
        .then(x => x / 2);
    return value;
}
asyncFun().then(x => console.log(x))


function wait(timeout) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, timeout)
    })
}

async function requestWithRetry(url) {
    const MAX_RETRIES = 2
    for (let i = 0; i <= MAX_RETRIES; i++) {
        try {
            await wait(2000)
            console.log("wait for 2s");
        } catch (err) {
            const timeout = Math.pow(2, i)
            console.log('Waiting', timeout, 'ms')
            await wait(timeout)
            console.log('Retrying', err.message, i)
        }
    }
}

requestWithRetry();

//Christmas tree
//functionA returns a Promise,
// then functionB needs that value
// and functionC needs the resolved value of both functionA's and functionB's Promise.

async function executeAsyncTask() {
    const valueA = await functionA()
    const valueB = await functionB(valueA)
    return function3(valueA, valueB)
}


async function executeParallelAsyncTasks() {
    const [valueA, valueB, valueC] = await Promise.all([functionA(), functionB(), functionC()])
    doSomethingWith(valueA)
    doSomethingElseWith(valueB)
    doAnotherThingWith(valueC)
}


function asyncThing(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value), 1000)
    })
}

async function main() {
    return [1, 2, 3, 4].map(async(value) => {
        const v = await asyncThing(value)
        console.log(v, "---------");
        return v * 2
    })
}

main()
    .then(v => console.log(v, "---after---"))
    .catch(err => console.error(err))


async function filterMain() {

    return [1, 2, 3, 4].filter(async(value) => {
        const v = await asyncThing(value)
        return v % 2 === 0
    })
}

filterMain()
    .then(v => console.log(v))
    .catch(err => console.error(err))
