/*
 * The function must replace all the vowels with '?' and return the result string
 * Ex: input: 'Foo' - output: 'F??'
 */  
function replaceVowels(string){
    let res = '';
    let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O','u', 'U'];
    for(let i = 0; i < string.length; i++){
        if (!vowels.includes(string[i])){
            res += string[i];
        } else {
            res += '?';
        };
    };
    return res 
};

console.log(replaceVowels('Foo'));