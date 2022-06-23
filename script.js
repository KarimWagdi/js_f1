 /*
 let js = 'amazing';
    // if (js === 'amazing') alert('java script is FUN!');
    
    console.log(40 + 20 + 15 - 14);
    let myFirstName = 'wagdi';
    console.log(myFirstName);

    // we must name the variables with discriptive 

    let myFirstJob = 'programmer';
    let mySecondJob = 'teacher';

    let job_1 = 'programmer';
    let job_2 = 'teacher';
    
   // data type 
   let javaScriptIsFun = true;
   console.log(javaScriptIsFun);

   console.log(typeof true);
   console.log(typeof javaScriptIsFun);
   console.log(typeof 23);
   console.log(typeof 'wagdi')

// change the value type 

   javaScriptIsFun = "yes!";
   console.log(typeof javaScriptIsFun);

   console.log(typeof null);
   let work;
   console.log(typeof work);

// let var and const 
// let is a block scope 
let age = 30 ;
age = 31 ;
 
const birthYear = 1995 ;
// birthYear = 1996; it will never work 

// var is a function scope
var name = 'karim';
name = 'wagdi'
console.log (name);


// basic operators
// 2**3 means 2 to the power of 3

const now = 2032 ;
const myAge = now - 1995 ;
const herAge = now - 2000 ;
console.log (myAge , herAge)
console.log (myAge/3 , herAge*2 , 2**3)

const firstName = 'karim' ;
const lastName = 'wagdi' ;
console.log (firstName +' '+ lastName);

//assignment operators

let x = 10 + 5 ;
x += 10 ; // means x = x + 10
x ++; // means x = x + 1 ;
console.log(x);

//comparison operations 
console.log(myAge > herAge);
console.log(herAge >= 40);

const age = 12 ;
if (age >= 18){
    console.log ( 'you can drive');
}else {
    const remainAge = 18 - age ;
    console.log(`you can drive after ${remainAge} years`)
}
// we use ` to make ${} work 

const birthYear = 2005 ;
let century; //must defined outside the if statment 
if (birthYear <= 2000){
    century=20
}else{
    century=21
}
console.log(century)

 
// task_1 mark and john BMI masses 
let mark ;
let markMass = 78;
let markLinght = 1.69 ;
let markBMI = (markMass / markLinght**2);
// console.log(markBMI)
let john ;
let johnMass = 95;
let johnLenght = 1.88;
let johnBMI = (johnMass / johnLenght**2);
if (markBMI > johnBMI){
    console.log ('marks BMI is higher than johns BMI')
}else{
    console.log('johns BMI in higher than marks BMI ')
}

const firstName = 'karim' ;
const job = 'teacher' ;
const birthYear = 1995 ;
const year = 2022 ;

const wagdi = "i'm " + firstName + ' ,a ' + (year - birthYear) + ' years old ' + job +"!" ;
console.log(wagdi);

const newWagdi =`i'm ${firstName} ,a ${year - birthYear} years old ${job} !`;
console.log(newWagdi);

 console.log('string \n\
  with \n\
   multiple \n\
   lines');

   console.log(`string with 
   multiple
   lines`)
  

//   convertion of data type 
const year = '1995';
console.log(Number(year) , year);
console.log(year + 19);
console.log(Number(year)+19);

// NaN is not a numer but saved as a number

console.log(Number('karim'));
console.log(typeof(NaN));

// type coercion 
console.log("i'm " + 23 + ' old');
console.log("20" -'15' + 8);

// + operator make it string

let n = '1' + 1 ; // '11'
n = n-1 ;
console.log('n'); //10
 */
/* 5 falsy values
1- zero 
2- NaN 
3- empty values
4- null
5- undefined */
/*
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean('wagdi'));

const money = 0 ;
if(money){ // if statment turns all the value to boolean 
    console.log("don't spend it all")
}else{
    console.log("go get a job")
}
// equality 18 === 18 true but "18" === 18 false !! because the type
// 18 == 18 true ,"18" == 18 also true
// != , !== is not equal 
*/
const hasDriverLiances = true ; //A
const hasGoodVision = false ; //B

console.log(hasDriverLiances && hasGoodVision); // && means and 
console.log(hasDriverLiances || hasGoodVision); // || means or
console.log(!hasDriverLiances);

if (hasDriverLiances && hasGoodVision){
    console.log("can drive");
}else{
    console.log("can't drive");
}