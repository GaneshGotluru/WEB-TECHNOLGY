// (function(){
//     console.log('Helo')
// }())
// ;
// (function(){
//     console.log('Ganesh')
// })()

// console.warn('SIF/IIF')

// let fun=function(a){
//     // console.log(a)//10
//     return a
// }
// fun(10)


// let res=fun('Hi')
// console.log(res)
// console.log(typeof fun)//function
// console.log(typeof res)//string

// let x=(function(b){
//     return b

// }('Bye'))
// console.log(x)
// console.log(typeof x)//String


// console.log((demo=>demo)('JavaScript'));
// console.log(((a,b)=>a+b)(10,20))

// console.warn('Call back function & HOF ')

// let num=function(){
//     return 100;
// }

// function sum(a,b){

//     return a+b();
// }
// let res=sum(200,num)
// console.log(res)

// let surname=function(){
//     return 'Gotluru'
// }
// function fullname(fnm,lnm){
//     console.log(fnm,lnm);
// }
// fullname('Ganesh',surname())
// fullname('Varalakshmi',surname())
// fullname('Mahesh',surname())
// fullname('Sreenivasulu',surname())

// function res(a,b){
//     let x='10'
//     let z=a+b()+x
//     console.log(z);
// }

// res(100,function(){
//     return 100;
// })

console.warn('Taking input for end user')
function num(){
    let x=Number(prompt('Enter a num1'))
    let y=Number(prompt('Enter a num2'))

    let res=x+y
    console.log(res)
}
num()