// let a=10
// let b='10'

// if (a==b){
//     console.log('Data is equal')
// }


// if(a%2==0){
//     console.log(a+" is even number")
// }


// let mockrating='Remock';
// if( mockrating==='p1c1'){
//     console.warn('Mock is Cleared')
// }
// else{
//     console.error('Remock / good luck for next time')
// }


// WAP to check even/odd number

// let a=11
// if(a%2==0){
//     console.log(a+' is even num')
// }
// else{
//     console.log(a+' is odd num')

// let fnm="Ganesh"
// let x=22
// if(x >=21){
//     // console.log(fnm+' age is '+age);
//     console.log(`${fnm} age is ${x}`)
//     console.log(x+' elgible for marriage')
// }
// else{
//     console.log(x+'complete education')
// }


//else if ladder

// let x=0
// if(x>0){
//     console.log(`${x} is postive num`)
// }
// else if(x<0){
//     console.log(`${x} is -ve num`)
// }
// else{
//     console.log(`${x} is postive or num`)
// }

// let g=59
// if(5>g){
//     console.log('Go to school')
// }
// else if(g<=18){
//     console.log('conecntrate on studies')
// }
// else if(g<=30){
//     console.log('Eligible to marriage')
// }
// else if(g<=60){
//     console.log('Start a business ')
// }
// else{
//     console.log('Dieeee')
// }

//nested if

// let x=-4
// if(x>0){
//     document.writeln(`${x} is +ve num`)
//     if(x%2==0){
//         document.writeln(`& it is Even num`)
//     }
//     else{
//         document.writeln(`& it is Odd num`)
//     }
// }
// else if(x<0){
//     document.writeln(`${x} is -ve num`)
//     if(x%2==0){
//         document.writeln(`& it is Even num`)
//     }
//     else{
//         ocument.writeln(`& it is Odd num`)
//     }

// }
// else{
//     document.writeln(`${x} is neither +ve or -ve num`)
// }

//switch case
// let trafficSignal = 'red'
// switch(trafficSignal){
//     case 'red':console.log('Stop...🤚⛔')
//         console.error("Your in danger situation... Dont goo")
//         break;
//     case'yellow':console.log('Get ready ..💛')
//         console.warn('Be ready dont goo')
//         break;
//     case 'green':console.log("Goooooo to _______")
//         break;
//     default:console.log('Invalid signal or color')
// }


// let i=0
// for (console.log('Hello');i<=5; console.log('world')){
//     console.log('Bye')
//     i+=2
// }

//wap to the numbers from 10 -20
// for(let i=10 ; i<=20 ; i++){
//     console.log(i)
// } 

// console.warn('wap to print only even numbers 35-50')
// // wap to print only even numbers 35-50
// for(let j=35; j<=50; j++){
//     if(j%2==0){
//         console.log(j)
//     }
// }
// console.warn('wap to print only odd num 50-60')

// //wap to print only odd num 50-60
// for(let j=50; j<=60; j++){
//     if(j%2==1){
//         console.log(j)
//     }
    
// }

// console.warn('wap to print only even numbers  in reverse order 15-25')
// for(let j=25; j>=15; j--){
//     if(j%2==0){
//         console.log(j)
//     }
    
// }

//while loop
console.warn('While loop')

console.warn('wap to the numbers from 10 -20')

let i=10
while(i<=20){
    console.log(i)
    i+=1
}

console.warn('wap to print only even numbers 35-50')

let j=35
while(j<=50){
    if(j%2==0){
        console.log(j)
    }
    j+=1
}

console.warn('wap to print only odd num 50-60')
let g=50
while(g<=60){
    if(g%2!=0){
        console.log(g)
    }
    g+=1
}

console.warn('wap to print only even numbers  in reverse order 15-25')

let a=25
while(a>=15){
    if(a%2==0){
        console.log(a)
    }
    a-=1
}