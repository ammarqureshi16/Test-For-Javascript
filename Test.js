// Question: 1
console.log("Question: 1");
for (var i = 1; i < 16; i++) {
  console.log(i);
}

for (var i = 17; i > 1; i--) {
  console.log(i);
}

var num = [0, 2, 23, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 15, 16, 17, 18, 19, 20];
console.log(num);
for (var i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (var i = 1; i < 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// Question : 2
console.log("Question : 2");
var num = 0;
for (i = 1; i <= 100; i++) {
  num = i + num;
}
console.log(num);

// Question: 3
console.log("Question: 3");
var naam = ["Hammad", " Adil", "Javed"];
var mark = [200, 400, 350];

var obtmarks = mark[0];
percentage = (obtmarks / 500) * 100;
console.log("Stundent Name : " + naam[0]);
console.log("Total Marks : " + mark[0]);
console.log("Percentage : " + percentage + "%");

// Stundent Two
var obtmarks = mark[1];
console.log("Stundent Name : " + naam[1]);
console.log("Total Marks : " + mark[1]);
console.log("Percentage : " + percentage + "%");

//   Stundent Three
var obtmarks = mark[2];
console.log("Stundent Name : " + naam[2]);
console.log("Total Marks : " + mark[2]);
console.log("Percentage : " + percentage + "%");

// Question: 4
console.log("Question: 4");
var user = +prompt("Numer 1");
var usertwo = +prompt("Numer 2");
var userthree = +prompt("Numer 3");

console.log(user);
console.log(usertwo);
console.log(userthree);

if (user + usertwo + userthree === 180) {
  alert("Triangle is valid");
} else {
  alert("Triangle is not valid");
}

// Question: 5
console.log("Question: 5");
var user = +prompt("Enter Number");
var num = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

if (user === num) {
  alert("Even");
} else {
  alert("Error");
}

// // Question: 6
// console.log("Question: 6")
