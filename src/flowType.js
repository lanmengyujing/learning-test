// @flow
function concat(a: string, b: string): string {
    return a + b;
}

concat("A", "B"); // Works!

let method = (str: string, bool?: boolean, ...nums: Array<number>): void => {
    console.log(nums);
};

method('a', true, 2,3, [3]);

function returnValue(): boolean {
    if (Math.random() > 0.5) {
        return true;
    }
    return false;
}

function testFunction(func: any) {
    func(1, 2);     // Works.
    func("1", "2"); // Works.
    func({}, []);   // Works.
}
function testFunction(func: () => mixed) {
}

testFunction()

var obj: { foo?: boolean } = {};
obj.foo = true;