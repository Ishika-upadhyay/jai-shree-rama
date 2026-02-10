// inserting elements in an array

let arr= [1,2,3];
arr.push(65);
// 4rd index will remain empty
arr[5]= 100;
console.log(arr);

// deleting elements from an array

let gayab = arr.pop() //removes the last element and we can also store it 
console.log(gayab);
console.log(arr);

delete arr[1] //deletes the element but the index will remain empty
console.log(arr);

// to remove the empty index we can use splice method

arr.splice(1,1) //first parameter is the index and second parameter is the number of elements to be removed
console.log(arr);

// to add an element in the middle of the array we can also use splice method
arr.splice(1,0,50) //first parameter is the index and second parameter is the number of elements to be removed and third parameter is the element to be added
console.log(arr);


// giving array as a copy not a reference

let arr2 = [1,2,3];
let arr3 = [...arr2] //spread operator, now no connection b/w arr2,ar3
let arr4 = arr2.slice(); // another method but it is not used much

// to merge two array 
let str= ["Ishika", "Bro"];
let str1= ["special", "person"];
let murg_arr= str.concat(str1);// m-1
let mergedArray = [...str,...str1]// m-2
console.log(mergedArray);

// to check if an element is present in the array or not
let num= [1,2,3,4,5];
console.log(num.includes(3)); //true
 let check= 3 in num 

 //oppposite of pop method is shift method which removes the first element of the array