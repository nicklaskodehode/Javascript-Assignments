console.log(
  "HER STARTER LOOP TASKS --------------------------------------------------------------------------------"
);

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
for (let i = 5; i <= 50; i += 5) {
  console.log("5x" + multiplier + " = " + i);
  multiplier++;
}

let text = "This is a very long text";

//opgave 3
console.log("Opgave 3 -----");
for (let i = 1; i <= text.length; i++) {
  console.log("character number " + i);
}

//Opgave 4
let numbList = [1, 2, 76, 53, 588, 34, 867, 332];
let BigNumb = 0;
for (let number of numbList) {
  if (number > BigNumb) {
    BigNumb = number;
  }
}
console.log("Opgave 4 -----");
console.log("the biggest number is: " + BigNumb);

//Opgave 5
console.log("Opgave 5 -----");
let reversed = "";
for (let i = text.length - 1; i >= 0; i--) {
  reversed += text[i];
}
console.log(reversed);

//Opgave 6
console.log("Opgave 6 -----");
for (let i = 1; i <= 20; i++) {
  if (i === 10) {
    continue;
  }
  console.log(i);
}

//Opgave 7
console.log("Opgave 7 -----");
let evenNumbers = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    evenNumbers = evenNumbers + i;
    console.log(i);
  }
}
console.log("the sum of even numbers are: " + evenNumbers);

//Opgave 8
console.log("Opgave 8 -----");
let star = "*";
for (let i = 1; i <= 4; i++) {
  console.log(star.repeat(i));
}

//Opgave 9
console.log("Opgave 9 -----");
let whiteSpace = " ";
function diamond(length) {
  for (let i = 1; i <= length; i++) {
    console.log(whiteSpace.repeat(length - i) + star.repeat(i * 2 - 1));
  }
  for (let i = length - 1; i >= 1; i--) {
    console.log(whiteSpace.repeat(length - i) + star.repeat(i * 2 - 1));
  }
}
diamond(5);

//Opgave 10
console.log("Opgave 10 -----");
text = "This is a very very very long long sentence this";
let words = text.split(" ");
let dublicate = [];
let list = [1, 2, 2, 3, 4, 2, 5, 6, 7];
// i = 1, j = 2;
// i = 2, j =3;
function checkDublicate(words) {
  for (let i = 0; i <= words.length; i++) {
    for (let j = i + 1; j <= words.length; j++) {
      if (words[i] === words[j]) {
        if (!dublicate.includes(words[j])) {
          dublicate.push(words[j]);
        }
      }
    }
  }
  return dublicate;
}
console.log(checkDublicate(words));

//Opgave 11 - Extra opgave
console.log("Opgave 11 -----");
let number1 = 10;
let number2 = 20;
let switchNumb;
switchNumb = number1;
number1 = number2;
number2 = switchNumb;

console.log(number1, number2)



console.log("Opgave 12 -----");
//Opgave 12
//1,2,3,5,8,13,21,34,55
let numb1 = 0;
let numb2 = 1;
let numbSum;
for (let i = 1; i <= 10; i++) {
  console.log(numb1);
  numbSum = numb1 + numb2;
  numb1 = numb2;
  numb2 = numbSum;
}



//Opgave 13
console.log("Opgave 13 ------");
//hvis tal kan deles KUN med sig selv og 1 er det et primtal
//fx 2 er primtal, can deles med 1 og 2
//3 er primtal, kan deles med 1 og 3
//4 er ikke primtal, kan deles med 1,2,4
function CheckPrimtall(tal) {
  if (tal % 2 === 0) {
    // console.log(tal % 2);
    // console.log("Not prime");
    return false;
  } 
  else 
  {
    let primtal = [];
    // console.log(tal);
    let isTalPrime = false;
    let target = Math.floor(tal/2);
    for (let i = 3; i <= target; i += 2) 
        {
    //   console.log("i: " + i);
      
      if (primtal.length === 0) 
        {
        primtal.push(i); //kun på første iteration
      } 
      else 
      {
        let prevPrimeFound = true;

        for (let j = 0; j <= primtal.length; j++) 
            {
        //   console.log("index j: " + j);

          if (i % primtal[j] === 0) 
            {
            // console.log("Not prime "+ i);
            prevPrimeFound = false;
          } 
          else 
          {
            // console.log("possible prime "+i);
          }
        }
        if(i === target && prevPrimeFound === true)
            {
            isTalPrime = true;
            // console.log("Prime");
        } 
        if (prevPrimeFound === true) 
            {
          primtal.push(i);
        //   console.log("Prime");
        } 
      }
    }

    // console.log(primtal);
    // console.log(isTalPrime);
    return isTalPrime;
  }
}

printPrime(100)
function printPrime(max) {

   for (let i = 0; i < max; i++) {
        let result = CheckPrimtall(i);
        if (result) {
            console.log(i);
        }    
   }
}


//Opgave 14
console.log("Opgave 14 ------");


//Opgave 15
console.log("Opgave 15 ------");