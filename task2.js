let myString;
do {
  myString = prompt("Enter test sentence, Please");
} while (!myString);
let stringArray = myString.split(" ");
// create an array with corresponding word lengths
let lengthArray = stringArray.map((w) => w.length);
let max = Math.max(...lengthArray);
let bigWordIndex = lengthArray.indexOf(max);
let bigWord = stringArray[bigWordIndex];
document.body.innerHTML = `<h3>Your sentence is : ${myString}</h3> <h2>Longest word is: ${bigWord}</h2>`;
