// Question: 1
console.log("Question: 1");
console.log("Question: 1 (Part: A) (Counting:)")

for (var i = 1; i < 16; i++) {
  console.log(i);
}

console.log("Question: 1 (Part: B) (Reverse counting)")
for (var i = 17; i > 1; i--) {
  console.log(i);
}

console.log("Question: 1 (Part: C) (Even: Number)")
var num = [0, 2, 23, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 15, 16, 17, 18, 19, 20];
// console.log(num);
for (var i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
console.log("Question: 1 (Part: D) (Odd: Number)")
for (var i = 1; i < 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// Question : 2
console.log("Question : 2 (Sum For 100)");
var num = 0;
for (i = 1; i <= 100; i++) {
  num = i + num;
}
console.log(num);

// Question: 3
console.log("Question: 3 (scores & percentages)");
console.log("Stundent: 1")
var naam = ["Hammad", " Adil", "Javed"];
var mark = [200, 400, 350];
var obtmarks = mark[0];
percentage = (obtmarks / 500) * 100;
console.log("Stundent Name : " + naam[0]);
console.log("Total Marks : " + mark[0]);
console.log("Percentage : " + percentage + "%");

// Stundent Two
console.log("Stundent: 2")
var obtmarks = mark[1];
console.log("Stundent Name : " + naam[1]);
console.log("Total Marks : " + mark[1]);
console.log("Percentage : " + percentage + "%");

//   Stundent Three
console.log("Stundent: 3")
var obtmarks = mark[2];
console.log("Stundent Name : " + naam[2]);
console.log("Total Marks : " + mark[2]);
console.log("Percentage : " + percentage + "%");

// Question: 4
console.log("Question: 4 (Triangle Angles Is Equal To 180 Degrees)");
var user = +prompt("Enter Triangle Angles Numer 1");
var usertwo = +prompt("Enter Triangle Angles Numer 2");
var userthree = +prompt("Enter Triangle Angles Numer3");
console.log(user);
console.log(usertwo);
console.log(userthree);
if (user + usertwo + userthree === 180) {
  alert("Triangle is valid");
} else {
  alert("Triangle is not valid");
}

// Question: 5
console.log("Question: 5 (Even Or Odd)");
var user = +prompt("Enter Even & Odd Number");
if (user % 2 ==0) {
  alert("Even");
} 
else {
  alert("Odd");
}

// Question: 6

console.log("Question: 6 (Marksheet Print With Using Switch Case)")
var userone = +prompt("Enter your English Marks :");
var usertwo = +prompt("Enter your Math Marks :");
var userthree = +prompt("Enter your Urdu Marks :");
// var userfour = +prompt("Enter your Urdu Marks :");
// var userfive = +prompt("Enter your Islamiat Marks :");

var totalMark = 100;
var obtmarks = userone + usertwo + userthree;
var percentage = (obtmarks / 300) * 100;
console.log("English Marks : " + userone);
console.log("Math Marks : " + usertwo);
console.log("Urdu Marks : " + userthree);

var prop1 = percentage >= 80;
var prop2 = percentage >= 70 && percentage < 80;
var prop3 = percentage >= 60 && percentage < 70;
var prop4 = percentage >= 50 && percentage < 60;
var prop5 = percentage >= 40 && percentage < 50;
var prop6 = percentage < 40;

switch (true) {
  case prop1:
   alert("You got A1");
   break;

  case prop2:
   alert("You got  A");
   break;

  case prop3:
   alert("You got B");
   break;

  case prop3:
    alert("You got C");
    break;

  case prop4:
   alert("You got D");
   break;

  case prop5:
   alert("You got E");
   break;

  case prop3:
   alert("You are Fail");
   break;
}
// Question 7


// Question 8
var user=+prompt("Enter your Number :")
var sum=""
for(let i = 1; i <= user; i++){
  sum=sum+"*"
  console.log(sum)
}

