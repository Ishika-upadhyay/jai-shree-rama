let score="33"

console.log(typeof(score))
console.log(typeof score )

let conv_score= Number(score)
console.log(typeof(conv_score))
console.log(conv_score)

let score1="33abc"
// not pure number 
// print => NaN not a number

console.log(typeof(score1))
console.log(typeof score1 )

let conv_score1= Number(score1)
console.log(typeof(conv_score1))
console.log(conv_score1)

// score= null
// Object
// number 
// 0


// score= undefined
// undefined
// number
// NaN

//score= "hahi"
//string 
// Number
// NaN

let boolean= Boolean(score)
console.log(boolean)

/*
1, any number, string - true
0, empty - false
 */

//..................OPERATIONS........................

// console.log( *, **, +,-,%,/ )

console.log("2"+1)//21
console.log("2"+1+2) //212
console.log(1+1+"2") //22

console.log(+true) //1
console.log(+"") // 1