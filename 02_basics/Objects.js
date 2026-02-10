const username = {
    "first name": "Ishika",
    "last name": "Bro"
};

console.log(username["first name"]);
username.email="ishu12@example.com";
console.log(username);

delete username["last name"];
console.log(username);

console.log("last name" in username);

//........... Conditionals ............

//check if the variable type is number or not
let myvar= 54;

if(typeof myvar === 'number'){
    console.log("The variable is a number");
}

//check if the array is empty or not
 let arr= [];

 if(arr.length === 0){
    console.log("The array is empty");
 }