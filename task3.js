let myArray = [];

//fill array with user input
for (let i = 1; i <= 5; i++) {
  let num;
  do {
    num = +prompt(`Enter number ${i} of 5`);
  } while (!num);
  myArray.push(num);
}
console.log(myArray);
let ascArray = [...myArray].sort((a, b) => a - b);
let decArray = [...myArray].sort((a, b) => b - a);
document.body.innerHTML += `<h3>your values is ${myArray.join()}</h3>`;
document.body.innerHTML += `<h3>asce values is ${ascArray}</h3>`;
document.body.innerHTML += `<h3>desc values is ${decArray.join()}</h3>`;
