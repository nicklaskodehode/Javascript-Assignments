console.log("HER STARTER LOOP TASKS --------------------------------------------------------------------------------");


//Opgave 1
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum = sum + i;
}
console.log("Opgave 1 -----");
console.log(sum);


//opgave 2
console.log("Opgave 2 -----");
let multiplier = 1;
for (let i = 5; i <= 50; i+=5) {
    console.log("5x"+multiplier+" = "+i);
    multiplier++;
}


let text = "This is a very long text";


//opgave 3
console.log("Opgave 3 -----");
for (let i = 1; i <= text.length; i++) {
    console.log("character number "+i);
}


//Opgave 4
let numbList = [1,2,76,53,588,34,867,332];
let BigNumb = 0;
for (let number of numbList) {
    if(number > BigNumb){
        BigNumb = number;
    }
}
console.log("Opgave 4 -----");
console.log("the biggest number is: "+BigNumb);


//Opgave 5
console.log("Opgave 5 -----");
let reversed = "";
for (let i = text.length -1; i >= 0; i--) {
    reversed += text[i];
}
console.log(reversed);


//Opgave 6
console.log("Opgave 6 -----");
for (let i = 1; i <= 20; i++) {
    if(i === 10){
        continue;
    }
    console.log(i);
}


//Opgave 7
console.log("Opgave 7 -----");
let evenNumbers = 0;
for (let i = 1; i <= 50; i++) {
    
    if (i % 2 === 0) {
        evenNumbers = evenNumbers+i;
        console.log(i);
    }
  }
  console.log("the sum of even numbers are: "+evenNumbers);


//Opgave 8
console.log("Opgave 8 -----");
let star = "*";
for (let i = 1; i <= 4; i++) {
    console.log(star.repeat(i));
}

//Opgave 9
console.log("Opgave 9 -----");
let whiteSpace = ' ';
function diamond(length) {
    for (let i = 1; i <= length; i++) {
    console.log(whiteSpace.repeat(length-i) + star.repeat(i*2-1));
    }
    for (let i = length-1; i >= 1; i--) {
        console.log(whiteSpace.repeat((length-i)) + star.repeat(i*2-1));
    }
}
diamond(9);


//Opgave 10
text = "This is a very very very long long sentence";
console.log("Opgave 10 -----");
let words = text.split(" ");
console.log(words);
// for (let i = 0; i <= text.length; i++){
//     if()
// }


console.log("Middels -------");
console.log("Opgave 10 -----");
//Opgave 10 
//1,2,3,5,8,13,21,34,55
let numb1 = 0;
let numb2 = 1;
let numbSum;
for (let i = 1; i <= 10; i++) {
    numbSum = numb1 + numb2;
    numb1 = numb2;
    numb2 = numbSum;
    console.log(numbSum);
}



//Opgave 11


//Opgave 12



//Opgave 13


