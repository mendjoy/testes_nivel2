/* 
 * The function should recive an integer between 1 and 12 (inclusive) and return the corresponding string value. If the informed integger is not between 1 and 12, the function should return 'Unknown Month'
 * Ex: input: 1 - output: "January"
 * Ex: input: 13 - output: "Unknown Month"
 * */
function correspondingMonth(month){
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September', 'October', 'November', 'December' ];

    if (month >= 1 && month <= 12){
        return months[month - 1];
    } else {
        return 'Unknown Month';
    };
};

console.log(correspondingMonth(2));
