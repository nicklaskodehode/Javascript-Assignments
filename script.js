console.log("Scripts Opgave---------------------------");

// Opgave 1)
function splitTextInHalf(text) {
  let midIndex = text.length / 2;
  midIndex = midIndex.toFixed(0);
  let firstPart = text.slice(0, midIndex);
  let secondPart = text.slice(midIndex);
  return secondPart + firstPart;
}
console.log("Opgave 1: " + splitTextInHalf("This is a very good good good test"));


// Opgave 2)
function booleanText(text, test) {
  if (test === true) {
    return text.toUpperCase();
  } else {
    return text.toLowerCase();
  }
}
console.log("Opgave 2: " +booleanText("Dette er en test for at se om det bliver upper eller lower case",true));


// Opgave 3)
function weekDays(text) {
  switch (text) {
    case "monday":
      console.log("It's monday today!");
      break;
    case "tuesday":
      console.log("It's tuesday now!");
      break;
    case "wednesday":
      console.log("It is wednesday my dudes");
      break;
    case "thursday":
      console.log("Thursday lets go!");
      break;
    case "friday":
      console.log("It's finally friday!");
      break;
    case "saturday":
      console.log("Relaxing saturday");
      break;
    case "sunday":
      console.log("oh god its monday tomorrow");
      break;
    default:
      console.log("That is not a day");
      break;
  }
}
console.log("Opgave 3: ");
weekDays("tuesday");
//For next time: use toLowerCase() or toUpperCase() so no matter the casing, its still hitting a case


// Opgave 4)
function sameLetter(text) {
  if (text.charAt(0) === text.charAt(text.length - 1)) {
    return "yes it's the same";
  } else {
    return "no it's not the same";
  }
} 
console.log("Opgave 4: "+sameLetter("this is a nice text"));


// Opgave 5)
function searchList(text, list) {
  return list.includes(text); 
    // if(list.includes(text)){
    //     return true;
    // } else {
    //     return false;
    // }
}
console.log("Opgave 5: "+searchList("sol", ["sol", "regn", "vind", "snø"]));


// Opgave 6)
function kombineretOrd(list) {
  let firstWord = list.shift();
  let lastWord = list.pop();
  return firstWord + lastWord; // or firstWord.concat(lastWord);
}
console.log("Opgave 6: " + kombineretOrd(["one", "two", "three", "four", "five"]));


// Opgave 7)
function identicalCheck(text1, text2) {

  if (text1.toLowerCase() === text2.toLowerCase()) {
    return "They are the same";
  } else {
    return "They are not the same";
  }
}
console.log("Opgave 7: " + identicalCheck("This is a test", "This is a test"));


// Opgave 8)
function containsCheck(text) {
  if (text.search("Javascript") >= 0) {
    return "It does contain Javascript";
  } else {
    return "It does not contain Javascript";
  }
}
console.log("Opgave 8: " + containsCheck("hey Javascript"));


// Opgave 9)
function ageCheck(numb) {
  if (numb < 13) {
    return "Barn";
  } else if (numb >= 13 && numb <= 19) {
    return "Tenåring";
  } else if (numb >= 20 && numb <= 64) {
    return "Voksen";
  } else {
    return "Pensjonist";
  }
}
console.log("Opgave 9: " + ageCheck(20));


// Opgave 10
function vowelCheck(letter) {
  //2 ways to make this
  let vowelList = ["a","e","i","o","u","y"];
  if (vowelList.includes(letter)){
    return "It's a vowel";
  } else {
    return "its a contant"
  }
  // if (letter.length != 1) {
  //   console.log("You have to put only 1 letter");
  // } else {
  //   if (
  //     letter === "a" ||
  //     letter === "e" ||
  //     letter === "i" ||
  //     letter === "o" ||
  //     letter === "u" ||
  //     letter === "y"
  //   ) {
  //     return "This is a vowel";
  //   } else {
  //     return "This is not a vowel";
  //   }
  // }
}
console.log("Opgave 10: " + vowelCheck("a"));


// Opgave 11
function seasonsCheck(month) {
    switch (month) {
        case "Desember":
        case "Januar":
        case "Februar":
          return "Vinter";
        case "Mars":
        case "April":
        case "Mai":
          return "Vår";
        case "Juni":
        case "Juli":
        case "August":
          return "Sommer";
        case "September":
        case "Oktober":
        case "November":
          return "Høst";
        default:
            return "Ikke en måned";
      }
}
console.log("Opgave 11: "+seasonsCheck("Mai"));


// Opgave 12
function removeElementFromList(array) {
  console.log(array);
  let newArray = array.slice(1, array.length - 1);
  console.log(newArray);
}
console.log("Opgave 12: ");
removeElementFromList(["sol", "vind", "regn", "snø", "skyet"]);
