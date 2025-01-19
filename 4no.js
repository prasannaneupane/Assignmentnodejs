//Create a Person class with properties name and age, and a method introduce that logs a message like "Hi, my name is [name] and I am [age] years old."

class Person {
    constructor(name, age) {
      this.name = name;  // Set the name property
      this.age = age;    // Set the age property
    }
  
    // introduce the person
    intro() {
        console.log("Hi, my name is "+[this.name]+" and I am " +[this.age]+" years old.");
    }
  }
  
 
  const person1 = new Person("Prasanna", 21);
  person1.intro();  // Output: Hi, my name is Prasanna and I am 20 years old.
  