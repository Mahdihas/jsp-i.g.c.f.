
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