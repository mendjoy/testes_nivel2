/**
 * The function should expect a string and return it backwards.
 * Ex: input: "foo" - output: "oof"
 */
function reverseString(string){
    stringSplitted = string.split('');
    return res = stringSplitted.reverse().join('');
};

console.log(reverseString('foo'));