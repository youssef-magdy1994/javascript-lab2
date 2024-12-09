let num;
//circle area
do {
  num = +prompt(`Enter radius of the circle`);
} while (!num);
let circleArea = Math.PI * num * num;
alert(`Circle area is ${circleArea.toFixed(2)}`);

// square root
do {
  num = +prompt(`Enter number to find it's square root`);
} while (!num);
alert(`square root is ${Math.sqrt(num).toFixed(2)}`);

// square root
do {
  num = +prompt(`Enter an angle to number its cos value `);
} while (!num);
alert(`cos value is ${Math.cos(num).toFixed(2)}`);
