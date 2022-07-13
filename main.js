// Bai 5

var number = 99;
var dozens = Math.floor((number % 100) / 10);
var units = number % 10;

const total = dozens + units;
console.log("Total is: " + total);



// Bai 4
var long = 8;
var short = 6;

const acreage = long + short;
console.log("Aceage is: " + acreage);

const perimeter = (long + short) * 2;
console.log("Perimeter is: " + perimeter);


// Bai 3
var USD = 10;
var toVND = 23500;
const result = USD * toVND;
console.log(new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(result));


// Bai 2
const arr = [1, 2, 3, 4, 5]
var sum = 0;
for (const a of arr) {
    sum += a;
}
const avg = sum / arr.length;
console.log(sum)
console.log(avg)

// Bai 1

const salaryDay = 100000;
var dayforWork = 5;

sum = salaryDay * dayforWork;
console.log(new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(sum));