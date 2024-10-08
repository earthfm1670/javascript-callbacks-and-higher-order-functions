//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  if (operation(array) >= 5) {
    return `ผ่านเกณฑ์ ✅`;
  } else {
    return `ไม่ผ่านเกณฑ์ ❌`;
  }
}

function scoreCheck(arr) {
  let scoreCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 70) {
      scoreCount++;
    }
  }
  return scoreCount;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here
let scoreRoom1Result = atLeastFive(studentScoresRoom1, scoreCheck);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, scoreCheck);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, scoreCheck);
console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
