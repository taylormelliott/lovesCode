var lovesCode = true;
if (lovesCode === true) {
  console.log("I love to code!");
} else {
  ("Coding has its challenges");
}

var amysAge = 29;
var brittanisAge = 34;
var amysBirthYear = 1991;
var brittanisBirthYear = 1996;

if (amysAge > brittanisAge) {
  console.log("Amy is older");
} else if (amysAge === brittanisAge) {
  console.log("They are the same age");
} else {
  console.log("Brittany is older");
}

if (amysBirthYear === brittanisBirthYear) {
  console.log("Amy and Brittany were born in the same year");
} else {
  console.log("Amy and Brittany were not born in the same year");
}

var arr = [10, 20, 30, 40, 50, 60];

var firstItem = arr[0];

var lastItemRemoved = arr.pop();
console.log(arr);

var family = ["Tyler", "Jordan", "Ryan", "Alice", "Ireland"];
for (let i = 0; i < family.length; i++) {
  console.log(family[i]);
}

var nums = [1, 2, 3, 6, 22, 98, 45, 23, 22, 12];
let evensArr = [];

for (let i = 0; i < nums.length; i++)
  if (i % 2 === 0) {
    evensArr.push(nums[i]);
  }

console.log(evensArr);

var score = 74;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) console.log("B");
else if (score >= 70) console.log("c");
else if (score >= 60) console.log("D");
else if (score < 60) console.log("F");
