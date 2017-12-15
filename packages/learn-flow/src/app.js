// @flow

/*flow-include
type Foo = {
  foo: number,
  bar: boolean,
  baz: string
};
*/

function foo(x /*: ?string*/) /*: string */{
    if (x) {
        return x;
    }
    return "default string";
}

const countries = {
    US: "United States",
    IT: "Italy",
    FR: "France"
};

type Country = $Keys<typeof countries>;

const italy: Country = 'IT';

/*::
const np: Country = 'FR';
*/
function print(country: Country) {
    console.log(countries[country]);
}
