/**
 * The function should work like an ATM machine. it will recive an integer value representing the amount that will be withdrown and an array containing the avaliable bank notes.
 * Your function will have to return an array informing the minimum amount of bank notes as possible for the withdrown. Consider that the amount of each note are infinity.
 *
 * Ex: input: 150 & [5, 50, 100] 	- output: ["100"=>1, "50"=>1].
 * Ex: input: 150 e [2, 5, 10] 		- output: ["10"=>15].
 */
function atmMachine(value, bankNotes){
    let res = {};
    bankNotes.sort((a, b) => b - a);

    for (let note of bankNotes) {
        let count = 0;
        while (value >= note) {
            value -= note;
            count++;
        };
              
        if (count > 0) {
            res[note] = count;
        } else if (value === 0) {
            break;
        };
    };  
    let output = [];
    for (let note in res) {
        output.push(`${note}=>${res[note]}`);
    };
    return output.sort()
};

console.log(atmMachine(150, [5, 50, 100]  ))