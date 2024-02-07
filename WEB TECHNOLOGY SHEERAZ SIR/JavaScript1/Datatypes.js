// var a=10
// console.log(a)
// console.log(typeof a) //number

// var b='Hello'
// console.log(b)
// console.log(typeof b) //string

// var c=true
// console.log(c)
// console.log(typeof c) // boolean

// var d;
// console.log(d)//undefined
// console.log(typeof d)


// var n= null;
// console.log(n)//null
// console.log(typeof n)//object

// let n1= Number(10)
// console.log(n1)
// console.log(typeof n1)//number

// let n2= Number('a')
// console.log(n2)//NaN
// console.log(typeof n2)//number


// let s=String(true)

// console.log(s) //true
// console.log(typeof s) //string


// let x=Boolean(10==110)
// console.log(x) // False

// let b =Boolean('a')
// console.log(b) //True


// let u = undefined
// // console.log(u)

// let n=10+'10'
// console.log(n)
// console.log(typeof n) //string

// console.log(10+5+'3') //153
// console.log(10+'5'+3)//1053
// console.log(10+'true'+20) //10true20
// console.log(true+'false'+true)//truefalsetrue
// console.log(10+5+true+'5')//165
// console.log(true+10+'8'+10+5)//118105
// console.log(10+'5'+(true+true))//1052

// let a=10
// let b=20

// console.log(a,b)
// console.log(a+b)

// console.log(10*'10')
// console.log(10*true)
// console.log(10*'true')
// console.log(true-'false')
// console.log(true+false+'true'-"false")

// exp=10+2*5
// console.log(exp)

// exp=10+2*10/2+5
// console.log(exp)

// Relational operators

// let a=10
// let b='10'
// let c=(a==b)
// console.log(c)

// //equality operator

// console.log(10=='10')//true
// console.log('100'=='10')//false
// console.log(100 !=100)//false

// //stricktly eqauality operator

// console.log(10==='10')//false
// console.log(10 !=='10')//true

//asignment operators

let x=10
console.log(x)//10

x+=1//x=x+1 
console.log(x)

x*=2 //x=x*2
console.log(x)//22

let a=10
let b=5
let c=a++ + ++b + ++a + --a + b--
console.log(c)
console.log(a)
console.log(b)