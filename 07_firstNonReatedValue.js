/*
 * The function must expect an array of integers and return the first non-repeated value.
 * Ex: input: [2,2,3,1,1,6] - output: 3
 */
function firstNonRepeatedValue(array){
    for (let i = 0; i < array.length; i++) {
      let count = 0;
      for (let j = 0; j < array.length; j++) {
        if (array[i] === array[j]) {
          count++;
        };
      };
      if (count === 1) {
        return array[i];
      };
    };
    return "Não há nenhum valor único";
};

console.log(firstNonRepeatedValue([2,2,3,1,1,6]));