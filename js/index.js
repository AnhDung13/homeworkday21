// bài 1

var numbers = [15, 0, 5, -1, 8];
var max = numbers[0];
var min = numbers[0];
var maxIndex = 0;
var minIndex = 0;
for (var index in numbers) {
  if (max < numbers[index]) {
    max = numbers[index];
    maxIndex = index;
  }
}
for (var index in numbers) {
  if (min > numbers[index]) {
    min = numbers[index];
    minIndex = index;
  }
}
document.write(
  "<p>Bài 1: phần tử lớn nhất trong mảng <span style='color:blue;'>" +
    numbers.join(", ") +
    " </span>là<span style='color:blue;'> " +
    max +
    " </span>vị trí index <span style='color:blue;'>" +
    maxIndex +
    " </span>phần tử nhỏ nhất: <span style='color:blue;'>" +
    min +
    " </span>vị trí <span style='color:blue;'>" +
    minIndex +
    "</span></p>"
);

// bài 2

var numbers = [0, 15, 20, 2, 3, 12, 5, -1, 7, 4];
var primeNumbers = [];

for (var value of numbers) {
  for (var i = 2; i <= Math.sqrt(value); i++) {
    if (value % i === 0) {
      value = false;
    }
  }
  if (value === false || value <= 0 || value === 1) {
    continue;
  }
  primeNumbers[primeNumbers.length] = value;
}
if (primeNumbers.length === 0) {
  document.write(
    "<p>Bài 2: Không có số nguyên tố nào trong mảng <span style='color:blue;'>" +
      numbers.join(", ") +
      "</span></p>"
  );
} else {
  var sum = 0;
  for (var value of primeNumbers) {
    sum += value;
  }
  document.write(
    "<p>Bài 2: số nguyên tố trong mảng <span style='color:blue;'>" +
      numbers.join(", ") +
      " </span>là <span style='color:blue;'>" +
      primeNumbers.join(", ") +
      "</span> trung bình các số nguyên tố trong mảng: <span style='color:blue;'>" +
      sum / primeNumbers.length +
      "</span></p>"
  );
}

//bài 3
var Arr = [1, 3, 5, 1, 2, 6, 5, 7, 7, 9, "dũng", 8, 11, "dũng", "dũng"];
var newArr = [];

for (var value of Arr) {
  for (var index in newArr) {
    if (newArr[index] === value) {
      value = false;
    }
  }
  if (value === false) {
    continue;
  }
  newArr[newArr.length] = value;
}

document.write(
  "<p>Bài 3: mảng <span style='color:blue;'>" +
    Arr.join(", ") +
    "</span> sau khi lọc trùng là: <span style='color:blue;'>" +
    newArr.join(", ") +
    "</span></p>"
);

// bài 4
var numbers = [2, 5, 1, 9, 8, 10];

function insertionSort(numbers) {
  for (let i = 1; i < numbers.length; i++) {
    let key = numbers[i];
    let j = i - 1;
    while (j >= 0 && numbers[j] > key) {
      numbers[j + 1] = numbers[j];
      j = j - 1;
    }
    numbers[j + 1] = key;
  }
  return numbers;
}

console.log(insertionSort(numbers));
