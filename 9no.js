//Write a program that iterates over an array of names and logs each name to the console with its index. Hint.forEach()

const names=["Prasanna","Aayushya","Sujal","Roshan","Rachit","Prasis","Rozen"];

names.forEach((names,index)=>{
    console.log(`Index: ${index}, Name: ${names}`);  //You don't need to define the index yourself
});