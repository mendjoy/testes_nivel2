/*
 * The function should recive an array with at least 3 itens and return the arithmetic average of all the itens.
 * If the recived array contains less then 3 itens, the function should return the boolean false.
 * Ex: input: [4,6,8] 	- output 6
 * Ex: input: [1,2] 	- output false
 */
function arithmeticAverage(array){
    if (array.length < 3){
        return false;
    } else {
        let soma = 0;
        for (let i = 0; i < array.length; i++){
            soma += array[i];
        };
        return soma / array.length;
    };
};

console.log(arithmeticAverage([4, 6, 8]));