// classes
//
// Syntax:
//
// class className {
//      constructor(myVariable){ This is the function that runs when you initialize an object of this class
//          this.myVariable = myVariable
//      } 
//
//      myMethod(parameters)
//
// }
//
//  
//  Usage of a class:
//
//  const myClassName = new className("Hello");
//  myClassName.myMethod();
//
//
//

class Person{ 
    #adresse //This is a private variable in the class
    constructor(firstName, lastName, adressse){
       
        // Standard method when initialization of an object of this class
        // This method/constructor is REQUIRED to have
        this.firstName = firstName; //This is a public variable
        this.lastName = lastName;
        this.#adresse = adressse;
    }


    sayHello(){ // Method name is optional and can be called any legal name. Think of it as a function 
        // console.log(`hello ${this.firstName} ${this.lastName}`);
    }

    getAdresse(){
        return this.#adresse;
    }

    setAdresse(myAdresse){
        this.#adresse = myAdresse;
    }
}

// Here is a new myPerson object getting created of datatype Person(object) 
// By creation the constructor runs that initializes objects
// So here you create a "document" of a template
const myPerson = new Person("Nicklas", "Nielsen", "Lowvejen 3");

// Here we use the Method sayHello() on object myPerson
myPerson.sayHello();

// console.log(myPerson.firstName)
// myPerson.firstName = "Paul";
// console.log(myPerson.firstName)
// console.log(myPerson.lastName)
// console.log(myPerson.adressse) // Cant get addresse because its a private variable, it cant be called outside of the class




//Mini assignment
// Create your own animal class. It needs atleast 2 private and atleast 1 public variable. It needs methods to change one of the private variables
// and return both private variables. Test the class by creation an object and see it works

class Animal {
    #animalSpecies;
    #animalCountry;
    #isMammal;
    constructor(name,animalSpecies,animalCountry, isMammal){
        this.name = name;
        this.#animalSpecies = animalSpecies;
        this.#animalCountry = animalCountry;
        this.#isMammal = isMammal;
    }

    getAnimalSpecies(){
        return this.#animalSpecies;
    }

    setAnimalSpecies(newSpecies){
        this.#animalSpecies = newSpecies;
    }

    getAnimalCountry(){
        return this.#animalCountry;
    }

    setAnimalCountry(newCountry){
        this.#animalCountry = newCountry;
    }

    getIsMammal(){
        return this.#isMammal;
    }
}


class Dog extends Animal {
    #size;
    constructor(name,size,animalCountry,animalSpecies,isMammal){
        super(name,animalSpecies, animalCountry, isMammal);
        this.#size = size;

    }   

    getSize(){
        return this.#size;
    }

    setSize(newSize){
        this.#size = newSize;
    }
}

class Snake extends Animal {
    #length;
    constructor(name, length,animalCountry, animalSpecies,isMammal){
        super(name,animalSpecies, animalCountry, isMammal);
        this.#length = length;
    }

    getLength(){
        return this.#length;
    }

    setLength(newLength){
        this.#length = newLength;
    }
}

const Tiger = new Animal("Indian Tiger", "Cat family", "India");
const Kobra = new Snake("King Kobra",25,"Senegal","reptile",false);
const GoldenRetriever = new Dog("Golden Retriever", "Big","United Kingdom", "Dog", true);

console.log(Kobra);
console.log(GoldenRetriever);

console.log(Tiger);
Tiger.setAnimalCountry("China"); //Change animalCountry

console.log(Tiger.getAnimalSpecies()); //returns the AnimalType variable
console.log(Tiger);

Tiger.setAnimalSpecies("Tiger family"); //Change animalType
console.log(Tiger);







// Inheritage is an important part of object orientated programming
// Inheritage does so you can reuse kode on an organized matter

class Dyr { // Parent class
    #navn;

constructor(navn)
{
    this.#navn = navn;
}

getNavn(){
    return this.#navn;
}

setNavn(navn){
    this.#navn = navn;
}

}

class Kat extends Dyr{ // Child class of Dyr - use extends to inherate
    #type;
    #antFødder;
    constructor(type,navn, antFødder){
        super(navn);
        this.#type = type;
        this.#antFødder = antFødder;
    }

    getAntFødder(){
        return this.#antFødder;
    }

    setAtnFødder(antFødder){
        this.#antFødder = antFødder;
    }

    getType(){
        return this.#type;
    }
    setType(type){
        this.#type = type;
    }
}


class Fisk extends Dyr { // Child class of Dyr
    #type;
    #skæg;

    constructor(type, navn, skæg) {
        super(navn);
        this.#type = type;
        this.#skæg = skæg;
    }

    print()
    {
        super.print();
        console.log(type);
        console.log(skæg);
    }

    getType(){
        return this.#type;
    }

    setType(type){
        this.#type = type;
    }

    getSkæg(){
        return this.#skæg;
    }

    setSkæg(skæg){
        this.#skæg = skæg;
    }
}


pus = new Kat("Persier","Buster",4);
console.log(pus);

boble = new Fisk("Torsk", "Jens", true);
console.log(boble);



// Static methods


// A utility class doesnt have a constructor, but all methods are static
class math {
    static add(numb1, numb2){
        return numb1 + numb2;
    }
    static sub(numb1,numb2){
        return numb1-numb2;
    }
    static multi(numb1,numb2){
        return numb1*numb2;
    }
    static div(numb1,numb2){
        return numb1/numb2;
    }
}

console.log(math.add(4,8));
console.log(math.sub(4,1));
console.log(math.multi(4,2));
console.log(math.div(15,5));




