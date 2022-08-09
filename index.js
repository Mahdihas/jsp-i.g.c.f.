
//৩. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে। 
// var i=51;
// while(i<=80){
   
//     //  var man =i;
//      console.log(i); 
//     i+=2;
// }


//৪. তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো 
// function Numberadditon(num1 , num2, num3){
//     let allNumber=num1 + num2 + num3;
//     console.log(allNumber);
//     return allNumber;
// }
// Numberadditon(200, 300,400)


//১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 
// function tofarenhite(celcius){
//     return (celcius * 9/5) + 32;

// };
// var temp = tofarenhite(1);
// console.log(temp);

//conver farenhite to celsius
// function tocelcius(f){
//     return (f-32) *(5/9);
// }
// var temprature =tocelcius(33.8);
//  var man=temprature.toFixed(1);
// console.log(temprature);
// console.log(man);

//3কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 

// function gradeCheck(marks){
//   if(marks >= 80){
//     return "A+";
//   } else if ( marks >= 70){
//     return "A";
//   } else if(marks >= 60){
//     return "A-";
//   } else if (marks >= 50){
//     return "B";
//   } else if (marks >= 40){
//     return "C";
//   } else if (marks >= 33){
//     return "D";
//   } else if (marks < 33){
//     return "Unsuccessfull";
//   } else {
//     return "Absent";
//   }
// }

// let result = gradeCheck(78);
// console.log(result);

//4 সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো। 
// function interestCount(amount) {
//   let interestRate = 5;
//   let interestAmount = amount * (interestRate / 100);
//   return interestAmount;
// }

// let result = interestCount(100000);
// console.log(result);

১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 
function maxumum(){
    let array=[34,0, 54, 56, 3444];
    let max=array [0];
    for (i=0 ;  i<array.length;i++){
        if(array[i]<max){
            max=array[i];
        }
    }
    console.log(`teh largest number in array is ${max}`)
}
maxumum();
function maxumum(){
    let array=[34, 54, 56, 3444];
    let max=array [0];
    for (i=0 ;  i<array.length;i++){
        if(array[i]>max){
            max=array[i];
        }
    }
    console.log(`teh largest number in array is ${max}`)
}
maxumum();
function maxInArray(number){
    let largest=number[0];

    for (i=0; i<number.length; i++){
        const index=i;
        const element=number[index];
        console.log(element);
        if(element>largest){
            largest=element;
        }
         
    }
    return largest;

}
const heigst=[160, 190, 120, 165, 137];
const tallest =maxInArray(heigst);
console.log("tallest person:", tallest);


//fibo :
const fibo=[0 , 1];
for(i=2; i<=10; i++){
    fibo[i]= fibo[i-1] +fibo[i-2];
}
console.log(fibo);

//arraAverage.js
function arrayAverage(numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers.length - 1; i++) {
    // let numList = numbers[i];
    // console.log(numList);
    let iCount = numbers.length;
    console.log(iCount);
    sum = sum + numbers[i];
  }
  return sum;
}

let values = [45, 67, 77, 24, 88, 89, 35, 68, 34];
let total = arrayAverage(values);
console.log(total);
let average = total / values.length;
let fixedAverage = average.toFixed(2);
let floatResult = parseFloat(fixedAverage);
console.log(floatResult);

// Answers:
// index count: 9
// Total: 527
// Average: 58.56 (Not a String)
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Stat
//areaRectangle.
function areaRectangle(length, wide) {
  let area = 2 * (length + wide);
  return area;
}

let result = areaRectangle(12, 5);
console.log(result);


//find negative number;

function onlyPositive(values) {
    let positives = [];
    for (let i = 0; i < values.length; i++) {
        let value = values[i];
        if (value > 0) {
            positives.push(value);
        } else if (value < 0) {
            break;
        }
    }
    return positives;
}

let values = [45, 87, 96, -11, 63, -56, 71, 28];
let result = onlyPositive(values);
console.log(result);
