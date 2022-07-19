// // // // function fizzBuzz(input) {

// // // //    console.log(typeof input);
// // // //    if (typeof input == NaN)
// // // //       return 'Not a number';

// // // //    if (input % 3 === 0 && input % 5 === 0)
// // // //       return "fizzBuzz";

// // // //    if (input % 3 === 0)
// // // //       return "Fizz";

// // // //    if (input % 5 === 0)
// // // //       return "Buzz";

// // // //    return input
// // // //    // else return "Not a number"
// // // // }
// // // // fizzBuzz(false)

// // // // // return () ? "fizz"
// // // // //    : (input % 5 === 0) ? "Buzz"
// // // // //    : (input % 3 === 0 && input % 5 === 3) ? "fizzBuzz" ? (input % 3 !== 0 && input % 5 !== 3) ? input : "Not a number"

// // // // function showNumbers(number) {
// // // //    let i = 0;
// // // //    while (i <= number) {
// // // //       // console.log(i);
// // // //       i++;
// // // //       if (i % 2 === 0) console.log(i + " EVEN");
// // // //       else console.log(i + " ODD");

// // // //    }
// // // // }

// // // // showNumbers(10)

// // // function countTruthy(array) {
// // //    let count = 0;

// // //    for (let value of array) {
// // //       if (value) count++;
// // //          // console.log(count);
// // //    }
// // //    return count;
// // // }

// // // console.log(count);

// // // let array = ["", null,  undefined, 0, 1, 2, 4, 3]
// // // // countTruthy(array);
// // // console.log(countTruthy(array));

// // // let obj = {
// // //    title: "a",
// // //    releaseYear: 2014,
// // //    director: "Francis"
// // // }

// // // for (let value in obj) {
// // //    if (typeof obj[value] === "string") {
// // //       console.log(value ,obj[value]);
// // //    }
// // // }

// // // console.log(typeof obj.title);

// // // function showProperties(obj) {
// // //    let message = typeof obj[value];
// // //    if (message) {
// // //       console.log(obj[typeof value === String]);
// // //    }
// // // // }

// // // function sum(limit) {
// // //    // let sum = 0;
// // //    let sum = 0;

// // //    for (let i = 0; i <= limit; i++) {
// // //       if (i % 3 === 0 || i % 5 === 0) sum += i;

// // //       console.log(i, sum);
// // //    }
// // //    return sum;
// // // }

// // // console.log(sum(30));

// // const marks = [80, 90, 50];

// // calculateGrade(marks)

// // function calculateGrade(marks) {
// //    let sum = 0;
// //    for (let mark of marks) sum += mark;

// //    let averageMark = Math.floor(sum / marks.length);

// //    if (averageMark < 60) console.log("F");
// //    if (averageMark < 70) console.log("D");
// //    if (averageMark < 80) console.log("C");
// //    if (averageMark < 90) console.log("B");
// //    else console.log("A");

// //    // switch (averageMark) {
// //    //    case 59:
// //    //       console.log("f");
// //    //       break;
// //    //    case 69:
// //    //       console.log("f");
// //    //       break;
// //    //    case 79:
// //    //       console.log("f");
// //    //       break;
// //    //    case 59:
// //    //       console.log("f");
// //    //       break;

// //    //    default:
// //    //       break;
// //    // }
// // }

// showStars(50);

// function showStars(rows) {
//    for (let row = 1; row <= rows; row++) {
//       let pattern = "";
//       for (let i = 0; i < row; i++) pattern += "*";
// console.log(pattern);
// 	}

// 	// console.log(rows);
// }

// $("button").text('Hi there').css("color", "red");

// $("button").click(function () {
//    $("h1").css("color", "green")
// })

// $(document).keydown(function (event) {
//    $("h1").text(event.key)
// })

// $("h1").on("mouseover", function () {
//    $("h1").css("border", "1px solid")
// })

// let word = "nurses run";

// console.log(word.includes(" "));

// let check = word.split("").reverse().join("");

const text = document.querySelector('h1');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => location.reload());

let input = prompt();

wordOrPhrase(input);

function wordOrPhrase(input) {
   if (input === '' || input === null || input === undefined) return ;
	if (input.includes(" ")) checkPalindromePhrase(input);
	else checkPalindromeWord(input);
}

function checkPalindromePhrase(input) {
	let inputed = input.toLowerCase();
   let check = inputed.split(" ").join("").split("").reverse().join("");
   // text.textContent = check;
	// console.log(check);
   
	let checking = inputed.split(" ").join("").split("").join("");
   
	// let detecting = input.split(' ');
	// console.log(detecting);
   
	if (check == checking) text.textContent = "Phrase is a Palindrome";
	else text.textContent = "Phrase is not a palindrome";
}

function checkPalindromeWord(input) {
	let inputed = input.toLowerCase();
	let check = inputed.split("").join("").split("").reverse().join("");

	console.log(check);

	if (check === inputed) text.textContent = "Word is a Palindrome";
	else text.textContent = "Word is not a Palindrome";
}

// word("madasm")

// checkPalindrome('nurses run');

// console.log(check);

// console.log(word.split(" ").join(""));
// word.split(',')

// console.log(word.split('').join(''));

// console.log(word == check);
