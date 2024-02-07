// console.warn('Function without parameter and without return value')
// function fun(){
//     console.log('Welcome');
// }

// fun()
// fun()
// function fun1(){
//     console.log('Bye');
// }
// fun1()
// fun1()

// console.warn(' Function With parameter and without return value')
// function fnm(nm){
//     console.log(`my name is ${nm}`)
//     console.log(typeof nm)
// }
// fnm("Ganesh")
// fnm('Kalyan')
// console.log(typeof fnm)//function

//example2

// function exa(x){
//     console.log(x)
//     console.warn(typeof x)
// }
// exa(10)
// exa("Hai")
// exa(true)
// exa()

// example 3
// function fullname(fnm,lnm,plc){
//     console.log(`My name is ${fnm} ${lnm}. I'm from ${plc}`)
//     // console.log(fnm,lnm)
//     // console.log(fnm+lnm)
// }
// fullname("Gotluru",'Ganesh',"Kothacheruvu")

// //WAP to add two numbers by using General function with parameter

// function add(a,b){
//     console.log(a+b)
// }
// add(2,4)
// add(2,6)
// //WAP to check evev or odd number by using General Function with parameter
// function evenodd(c){
//     if(c%2==0){
//         console.log('even')
//     }
//     else{
//         console.log('odd')
//     }
// }
// evenodd(3)

//or

// function eo(num){
//     (num%2==0)? console.log(num+" is even num"):console.log(num+' is odd num')
// }
// eo(10)
// eo(13)

// console.warn('Even numbers from 25-35')
// function evenNum(a,b){
//     for(let i=a; i<=b;i++){
//         if(i%2==0){
//             console.log(i)
//         }
//     }
// }
// evenNum(25,35)

// //wap to print only odd nums from 50-60 by using general function with parameter
// console.warn('Even numbers from 50-60')
// function oddnum(x,y){
//     for(let i=x; i<=y;i++){
//         if(i%2==1)
//         console.log(i)
//         // console.log(`${}odd numbers `)
//     }
// }
// oddnum(50,60)

// console.warn('Default Value for the parameter')
// function exa(a="Ganesh"){
//         console.log(a);

// }
// exa()//not passing anything we get default value
// exa(false)

//example
// console.warn('F with p ,default')
// function fun(a,b,c=420){
//         console.log(a,b,c);//Dinga Hai 420
//         b='Pakka'
//         console.log(a,b,c);//dinga pakka 420
// }
// fun('Dinga','Hai')

// console.warn('Even numbers')

// function even(a,b=40){
//         for(let a;a<=b;a++){
//                 (a%2==0)? console.log(a):console.log(a);
//                 // if(a%2==0){
//                 //         print(a)
//                 // }
//         }

// }
// even(20)

// function outerFun(a){
//         // console.log(a)
//         function innerFun(){
//                 console.log(a);
//         }
//         innerFun()
// }
// outerFun(10)

//Function without parameter and with return value
// console.warn('Function without parameter and with return value')

// function fun(){
//         return true
// }
// let bool=fun()
// console.log(bool)

//wap to check evevn or odd numbers by using general function with return value
// function eveodd(){
//         let x=12
//         // if(x%2==0){
//         //         // return 'even'
//         //         return `${x} is even num `
//         // }
//         // else{
//         //         return `${x} is odd num `
//         // }
//         return (x%2==0)? `${x} is even num `: `${x} is odd num `;

// }
// let res=eveodd()
// console.log(res)

// console.warn('WAP to add two numbers by using general function with return value')
// function add(){
//         let a=2
//         let b=2
//         let c=a+b
//         return c
// }
// let x=add()
// console.log(x)


//Function with parameter and with return value
// console.warn('Function with parameter and with return value')

// function num(a,b){
//         return a+b
// }
// let sum= num(10,20)
// console.log(sum)
// console.log(typeof sum)