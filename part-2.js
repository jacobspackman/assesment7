// Sum Zero

const isSumZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let k = 0; k < arr.length; k++) {
        if (arr[i] + arr[k] === 0) {
          return true;
        }
      }
    }
    return false;
  };
  
  let array1 = [1, 2, 3, 4, 5, 6, 7];
//   console.log(isSumZero([1, 2, 3, -2]), `true`);
//   console.log(isSumZero(array1), `false`);
  
  // runtime complexity of O(n^2) - nested for loop
  


  // Unique Characters
  
  const hasUniqueCharacters = (word) => {
    let arr = word.split("");
    for (let i = 0; i < arr.length; i++) {
      for (let k = i + 1; k < arr.length; k++) {
        if (arr[i] === arr[k]) {
          return false;
        }
      }
    }
    return true;
  };
  
  // console.log(hasUniqueCharacters("grape"), `true`);
  // console.log(hasUniqueCharacters("cool"), `false`);

  
  //  nested for loop, it will also have a runtime complexity of O(n^2)




  
  //  Pangram Sentence
  
  const isAPangram = (string) => {
    let strArr = string.toLowerCase()

    let alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("")
  
    for (let i = 0; i < alphabetArr.length; i++) {
      if (strArr.indexOf(alphabetArr[i]) < 0) {
        return false;
      }
    }
    return true;
  };
  
  string1 = "The quick brown fox jumps over the lazy dog?!";
  string2 = "yo its me eminem dog";

  // console.log(isAPangram(str1), `true`);
  // console.log(isAPangram(str2), `false`);

  // runtime complexity O(n)
  



  
  // Longest Word
  
  const longestWordLength = (arr) => {
    let lengthArray = [];

    for (let i = 0; i < arr.length; i++) {
      let Length = arr[i].length;

      lengthArray.push(Length)
      lengthArray.sort((a, b) => b - a)
    }
    return lengthArray[0];
  };
  
  // console.log(
  //   longestWordLength(["yes", "hi", "mother", "super"]),
  //   `return 6`
  // );
  // console.log(longestWordLength(["offer", "under", "subtraction", "no"]), `return 11`);

  
// runtime complexity of O(n) i think