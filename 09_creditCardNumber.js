/*
 * The function must return the full credit card number. The card number is a multiple of 123457 and the Luhn check digit is valid.
 * The Card Number must have the following pattern: 543210******1234
 */

function creditCardNumber(){
    let number_initial = 543210;
    let number_middle = 000000;
    let multiply = 1234;
  
    let found = false;
    while (!found) {
      number_middle = Math.floor(Math.random() * 1000000);
      let number_completed = number_initial * multiply + number_middle;
      if (number_completed % 123457 === 0){
        found = true;
      };
    };
  
    let digits = (number_initial.toString() + number_middle.toString()).split("");
    for (let i = digits.length - 2; i >= 0; i -= 2){
      let digit = Number(digits[i]) * 2;
      if (digit > 9){
        digit -= 9;
      };
      digits[i] = digit.toString();
    };
    
    let sum = 0;
    for (let i = 0; i < digits.length; i++){
      let digit = Number(digits[i]);
      if (i % 2 === 0) {
        digit *= 2;
        if (digit > 9){
          digit -= 9;
        };
      };
      sum += digit;
    };
    let checkDigit = (10 - (sum % 10)) % 10;
  
    let number_middle_string = number_middle.toString();
    while (number_middle_string.length < 6) {
      number_middle_string = "0" + number_middle_string;
    };
    let creditCard = number_initial.toString() + number_middle_string + checkDigit.toString() + "1234";
      
    return creditCard;
};
  
console.log(creditCardNumber());