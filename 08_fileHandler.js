/**
 * Your function need to read the file data.dat and return how many lines there are where the number of 0's is a multiple of 3 or the numbers of 1s is a multiple of 2.
 *
 */

const fs = require('fs');

function fileHandler(filePath){
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
  const lines = fileContent.split('\n');
  let count = 0;
  
  for (let i = 0; i < lines.length; i++){
    const line = lines[i];
    let zeros = 0, ones = 0;
    
    for (let j = 0; j < line.length; j++) {
      if (line[j] === '0'){
        zeros++;
      } else if (line[j] === '1'){
        ones++;
      };
    };
    
    if (zeros % 3 === 0 || ones % 2 === 0) {
      count++;
    };
  };
  
  return count;
};

console.log(fileHandler('./data.dat'));
