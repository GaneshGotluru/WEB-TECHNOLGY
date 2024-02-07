console.log('Welcome')
console.log('Js')

console.warn(" F Without P without R")
function add(){
    console.log(`${2+2}`)
}
add()

function wish(){
    console.log('Good Morning Ganesh')
}
wish()


console.warn(" F With P without R")


function add(a){
  if(a%2==0){
    console.log(a)

  }
  else{
    console.log('Nothing')
  }
}
add(3)
add(6)


console.warn('Anonymous function')
let ca=function(){
    console.log('I am in Anonymous Fun')
}
ca()



console.warn('Default Value for the Parameters')

function demo(x=1){
    console.log(x)
}
demo("GG")


console.warn('Arrow Function')

let some = (s,d)=>{
    console.log(s,d)
}
some(2,3)


let he = (a,b)=>{
    return a+b
}
console.log(he(4,4))

let he1 = a => a

console.log(he1(4))
//=============================================
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




// // -----------------

console.warn('SIF/IIF');

(
    function(){
        console.log('GAnehsh')
    }
)()

let s=(function(a,c){
        console.log(`${a+c}`)
}
)(2,2)


let k=(function mul(a=3,b=3){
    return a*b ;
}(2,4))
console.log(k)


let c= (()=>{
    return "iam in learning in functions"
})()

console.log(c)



console.warn('Call back and Higher Order fun')



// console.warn('Call back function & HOF ')

// let num1=function(){
//     return 100;
// }

// function sum(a,b){

//     return a+b();
// }
// let res1=sum(200,num1)
// console.log(res1)

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

// console.warn('Taking input for end user')
// function num(){
//     let x=Number(prompt('Enter a num1'))
//     let y=Number(prompt('Enter a num2'))

//     let res=x+y
//     console.log(res)
// }
// num()





