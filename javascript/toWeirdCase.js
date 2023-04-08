// Brekke Green - CodeWars toWeirdCase()
// Passed all tests

function toWeirdCase(string){
    //TODO
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== " ") {
        if (counter % 2 === 0) {
          string = string.slice(0, i) + string.slice(i).replace(string[i], string[i].toUpperCase());
          counter++;
        } else if (counter % 2 !== 0) {
          string = string.slice(0, i) + string.slice(i).replace(string[i], string[i].toLowerCase());
          counter++;
        }
      } else {
        if (counter % 2 !== 0) {
          counter++;
        }
      }
    }
    return string;
  }