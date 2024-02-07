// console.warn("Math Functions")

// console.warn('WAP find maximum and minimum number')

// function large(){
//     let x=Math.max(1,3,5,754,3,57,99,99)
//     console.log("Largest Number = "+x)

//     let y=Math.min(1,3,5,754,3,57,99,99)
//     console.log("Largest Number = "+y)
    
// }
// large()

// let powernum=function(x,y){
//     let res=Math.pow(x,y)
//     // console.log(res)
//     return res
// }
// let x=powernum(2,3)
// console.log(x)

// console.warn('taking input from user')
// let p1=function(a,b){
//     let va=Math.pow(a,b)
//     console.log(va)
// }
// p1(prompt('Enter n1'),prompt('ENter n2'))

// console.warn('Rest and spread operator')
// function demo(...a){//(rest operator)
//     console.log(a)//[10, 20, 30, 50, 40]
//     console.log(...a)//10 20 30 50 40 (spread ope)
// }
// demo(10,20,30,50,40)

// function num(...s){
//     let res=Math.max(s)//Here it passing array form so getting NaN output
//     console.log(res)
//     let maxres=Math.max(...s)//Here it passing values form so getting  output 3333
    
//     console.log(maxres) //3333
// }
// num(3,4,5,6,788,9,94,3,3333,)


// function num(){
//     let randomNumber=Math.random()*10000
//     console.log(randomNumber)

//     let otp=Math.floor(randomNumber)
//     console.log(otp)

//     if(otp>999){
//         let otp=Math.floor(randomNumber)
//         console.log(otp)
//     }
//     else{
//         num()
//     }
// }
// num()