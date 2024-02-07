// let ar=[10,20,30,40,50,]
// console.log(ar)
// console.log( typeof ar)

// ar[6]='ganehs'

// console.log(ar[5])

// ar[7]={
//     fname:'ganehs'
// }
// console.log(ar)

// ar[6]='Gotluru'
// console.log(ar)

// console.log(ar.length)
// let arr=['hi',100,true,'bye',200,false]
// // console.log(arr[0])
// // console.log(typeof arr[0])
// // console.log(typeof arr[1])
// for(let i=0;i<arr.length;i++){
//     if(typeof(arr[i])==='number')
//         console.log(arr[i])
// }


// let ar1=[10,20,30,40,50]
//  ar1.push(2999)
//  ar1.push(99,true,false,'Hai buddys')
//  console.log(ar1)

//  ar1.pop()
//  console.log(ar1.length)
//  ar1.pop()
//  console.log(ar1)
//  console.log(ar1.length)
//  ar1.pop()
//  console.log(ar1)
//  console.log(ar1.length)
 

//  ar1.unshift('EMo')
//  ar1.unshift('EM000o')
//  console.log(ar1)


//  ar1.shift()
//  ar1.shift()
//  console.log(ar1)







let arr=[10,20,30,40,50]
// let res=arr.splice(2,2)//splice(postion,delted elem,new value)
// console.log(arr)
// console.log(res)

//adding

// arr.splice(2,0,'new1','new2')//0 th postion no deletd
// console.log(arr)


console.warn('Update ')

let r2=arr.splice(1,1,true)//splice(postion,delted elem,new value)
console.log(r2)
console.log(arr)

// let arr=[10,20,30,40,50,60]
// console.log(arr)


for(let i=0 ; i<arr.length ;i++){
    console.log(arr[i])
}


arr.map((ele)=>{
    console.log(ele+5)
})


let res1=arr.map((ele)=>{
    return ele+5;
})
console.log(res1)
