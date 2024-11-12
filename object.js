// Declear varible car og set it to object datatype by adding attributes and methods
// Brand, model, regnr and color is the attributes to the object
// Info is the method to the object
const car = {
    brand: "Toyota",
    model: "Yaris",
    regnr: "",
    color: "Silver",
    info: function(){
        console.log(this.brand + " " + this.model);
    }
};

console.log(car);
console.log(typeof car);
car.info();



const recipe = {
    recipeName: "Cake",
    timeToMake: 30,
    ingredients: "Egg, flour, sugar, milk",
    difficulty: 2,
    info: function () {
        console.log(this.recipeName + " needs: " + this.ingredients)
    }
};

console.log(recipe);
recipe.info();




const person = {
    name: "Paul",
    age: 34,
    hairColor: "Brown",
    height: 183,
    eyeColor: "Brown/Hazel",
    address:{
        street: "Lowstreet",
        number: 3,
        zipcode: 5423,
        city: "Lowtown",
        info: function(){
            return this.street + " "+this.number+" "+this.zipcode+" "+this.city;
        }
    },
    getInfo: function () {
    console.log("This is "+this.name+ " they are "+this.age+" years old with "+ this.hairColor+ " hair and "+this.eyeColor+" eyes. They live at "+person.address.info());
    }
}
person.getInfo();



// Nested attributes:
const person2 = {
    name:{
        firstName: "Paul",
        lastName: "Low",
        info:function(){
            return this.firstName+" "+this.lastName;
        }
    },
    age: 34,
    hair: {
        color: "Brown",
        length: "Short",
        info:function(){
            return this.color+" "+this.length;
        }
    },
    address: {
        street: "Lowstreet",
        number: 3,
        zipcode: 5423,
        city: "Lowtown",
        info:function(){
            return this.street + " "+this.number+" "+this.zipcode+" "+this.city;
        }
    },
    hobbies: {
        football:{
            plays: "Lowtown United",
            fan: "Uptown City",
            info:function(){
                return "plays for "+this.plays+" and is a fan of "+this.fan;
            }
        },
        videogames:{
            plays: "Football manager",
            watches: "Fifa",
            info:function(){
                return this.plays+" and watches "+this.watches;
            }
        }
    },
    info:function(){
        return "This is "+this.name.info()+" his hair is "+this.hair.info()+" and his address is "+this.address.info()+" his hobbies are football where he "+this.hobbies.football.info()+" and he plays videogames like "+this.hobbies.videogames.info();
    }
}
console.log(person2.info());


// We can change the info on the go, which means it is dynamic
console.log(person2.address.street ="Lywstreet"); // Update an existing key with a new value
console.log(person2.hobbies.newestHobby = "Programming"); // Creates a new key-value pair
console.log(person2);
delete person2.hobbies.newestHobby; // Deletes the key-value pair newestHobby
person2.height = 190;
person2.info = function() {
    return "This is "+this.name.info()+" his hair is "+this.hair.info()+" and his address is "+this.address.info()+" his hobbies are football where he "+this.hobbies.football.info()+" and he plays videogames like "+this.hobbies.videogames.info()+ " "+person2.height;
}


person2['weight'] = 100 //Bracket-notation. This method is required with " " or other special characters is in the key name
console.log(person2['weight']);
console.log(Object.keys(person2));
console.log(Object.values(person2));
console.log(Object.entries(person2));




// We have an older way to do the same thing

const bike = new Object();
bike.brand= "Yamaha",
bike.model= "1.2",
bike.regnr= "UN34235",
bike.color= "Black";
bike.info = function(){
    console.log(this.brand + " " + this.model);
}

console.log(bike);
console.log(typeof bike);
bike.length = 2.5;



// Creates a copy if the object, which becomes a new object
 copy = Object.assign([],person2)
 console.log(copy);
 copy.name.firstName = "Per";
 console.log(copy.name);


 //Blueprint to create other objects
const prototypePerson = {
    hello: function(){
        console.log("Hello, my name is "+this.firstName);
    } 
}

//Creates an object of the blueprint
const nyPerson = Object.create(prototypePerson);
nyPerson.firstName = "Jack";
nyPerson.hello();

//Creates an object of the blueprint
const Per = Object.create(prototypePerson);
Per.firstName = "Per";
Per.hello();


//Loop throught an object to find keys
for(const key in person2){
    if(person2.hasOwnProperty(key)){
        console.log(key +": "+person2[key]);
    }
}

// 2 Other ways to loop through
for(const key of Object.keys(person2)){
    console.log(key +": "+person2[key]);
}

for(const [key,value] of Object.entries(person2)){
    console.log(key+": "+ value);
}