let username;
let phone;
let mobile;
let email;
let colorArray = ["red", "green", "blue"];
let color;

//choose fav color
do {
  color =
    colorArray[
      prompt("Choose your favorite color: red: 1 | green: 2 | blue: 3 ") - 1
    ];
} while (!color);

// validate user inf input
function promptUser(data, pattern) {
  let value;
  let valid;
  do {
    value = prompt("Please enter your" + data);
    valid = pattern.test(value);
  } while (!valid);
  document.body.innerHTML += `<h2>${data}: <span style="color:${color}">${value}</span.</h2>`;
}
promptUser("User Name", /[A-Za-z]+/);
promptUser("Phone", /^[0-9]{8}$/);
promptUser("Mobile", /^(011|012|010)\d{8}$/);
promptUser("Email", /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

let dateToday = new Date();
document.body.innerHTML += `<br><h2>Date & Time: ${dateToday.toLocaleString(
  "en-US"
)}</h2>`;
