//function receives a 2D array of letters and a word
// The function must check to find the word horizontally and vertically
//return true if the word is found and false if it isnt

//=============FIRST OPTION
// const wordSearch = (letters, word) => {
//   let verticalJoin = [];
//   const horizontalJoin = letters.map(ls => ls.join(''));

//   for (let out = 0; out < letters[0].length; out++) {
//     let horizontal = [];
//     for (let inside = 0; inside < letters.length; inside++) {
//       horizontal.push(letters[inside][out]);
//     }
    
//     verticalJoin.push(horizontal.join(''));
//   }

//   if (((verticalJoin.join('')).includes(word)) || (horizontalJoin.join('')).includes(word)) {
//     return true;
//   }  return false;
// }


//============SECOND OPTION
// const wordSearch = (letters, word) => {
//     let verticalJoin = [];
//     let horizontal = [];
//     const horizontalJoin = letters.map(ls => ls.join(''));
  
//     for (let out = 0; out < letters.length; out++) {
//       for (let inside = 0; inside < letters[out].length; inside++) {
//           if(!horizontal) {
//               horizontal = [];
//           }
//         horizontal.push(letters[inside][out]);
//       }
      
//       verticalJoin.push(horizontal.join(''));
//     }
  
//     if (((verticalJoin.join('')).includes(word)) || (horizontalJoin.join('')).includes(word)) {
//       return true;
//     }  return false;
//   }


//============THIRD OPTION INCLUDING STRETCH WORK 

const wordSearch = (letters, word) => {
  if (!letters) {
      return false
  }
  if (letters.length === 0) {
      return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''))
  for (l of horizontalJoin) {
      const array = l.split('');
      const reverse = array.reverse();
      const backwardsString = reverse.join('');
      if (backwardsString.includes(word)) return true;
  }

  for (l of horizontalJoin) {
      if (l.includes(word)) return true
  }
  //Vertical check
  for (let col = 0; col < letters[0].length; col++) {
      let verticalString = "";
      for (let row of letters) {
          verticalString += row[col];
      }
      if (verticalString.includes(word)) {
          return true;
      }
      const array = verticalString.split('');
      const reverse = array.reverse();
      const backwardsString = reverse.join('');
      if (backwardsString.includes(word)) {
          return true;
      }
  }
  const width = letters[0].length;
  const height = letters.length;

  let getDiagonal = (x, y) => {
      let xIndex = x;
      let yIndex = y;
      let result = "";
      while (xIndex < width && yIndex < height) {
          result += letters[xIndex][yIndex];
          xIndex++;
          yIndex++;
      }
      if (result.includes(word)) {
          return true;
      }

      let array = result.split();
      array = array.reverse();
      let reverseString = array.join('');
      if (reverseString.includes(word)) {
          return true;
      }
  }

  for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
          getDiagonal(x, y);
      }
  }

  return false;
}

module.exports = wordSearch
