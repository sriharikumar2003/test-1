//FizzBuzz
function FizzBuzz(n){
    for(i = 1 ; i<=n ; i++){
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz");
        }
        else if(i%3 == 0){
            console.log("Fizz");
        }
        else if(i%5 == 0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }
}

//For palindrome
let str = prompt();
let str2 = "";
var len = str.length;
var ind = 0
for(i = len-1 ;i >=0; i --){
   str2 = str2 + str.charAt(i); 
}
if(str.toLowerCase() === str2.toLowerCase()){
    console.log("It is a palindrome");
}
else{
    console.log("Not a palindrome");
}

//For maximum in an array
function maximum(arr){
    let max = 0;
    for(i = 0; i < arr.length;i++){
        max = arr[0];
        if(arr[i] > max ){
            max = arr[i];
        }
    }
    return max;
}
var val = [1,2,3,4];
console.log("The maximum value is : "+maximum(val));

//counting the number of characters in a string
function charCount(str,key){
    let cou = 0;
    for(i = 0 ;i< str.length;i++){
        if(str[i] === key){
            cou++;
        }
    }
    return cou;
}
//Factorial
function fact(n){
    let fact = 1;
    for(i = 1;i<=n ;i++){
        fact = fact*i;
    }
    return fact;
}
console.log("The factorial value is "+fact(5));

//Celcius to fahrenheit
function celToFar(cel){
    return (9/5)*cel +32;
}
console.log(celToFar(100));

//Missing numbers
function missing(arr){
    var val = 0;
    var miss;
    for(i = 0 ; i< arr.length;i++){
        if(arr[i] != val){
            miss = val;
        }
        val = val+1;
    }
    return miss;
 }
 let list = [0,1,2,3,5];
 console.log(missing(list));
 
