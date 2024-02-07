
// if(true){
//     var a = 10
//     let b=20
//     const c=30

//     console.log(a,b,c)
// }


// function fun(){
//     var a = 10
//     let b=20
//     const c=30
//     console.log(a,b,c)

//     return a
// }
// let res = fun()
// console.log(res)


// let arr=[10,20,30,40]
// for(let gane in arr){
//     console.log(gane)
// }

// for(let gane of arr){
//     console.log(gane)
// }


let obj={
    fname:'Ganesh',
    lname:'Gotluru',
    age:22,
    from: 'Ktc'
}


for(let gane in obj){
    console.log(gane)
}

for(let gane in obj){
    console.log(`${gane }=${obj[gane]}`)
}


// for(let gane of obj){
//     console.log(obj[gane]) // Uncaught TypeError: obj is not iterable
// }