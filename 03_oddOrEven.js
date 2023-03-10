/* 
 * The function should expect an array containing integers greater than zero and return the amount of even values contained in it.
 * Ex: input: [1,2,3,4,5] - output: 2
 */
function oddOrEven(array){
    let evenNumbers = 0 ;
    for (let i = 0; i < array.length; i++){
        if (array[i] > 0 && array[i] % 2 == 0){
            evenNumbers++;
        };
    };
    return evenNumbers;  
};

console.log(oddOrEven([1,2,3,4,5]));