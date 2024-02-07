// let arr=[10,20,30,40,50]
// console.log(arr)
// console.log(typeof arr)//object
// console.log(arr[2])
// console.log(arr[5])



// // add the array elements to the array list
// arr[6]=true
// console.log(arr);
// console.log(typeof arr[5])//undefined
// console.log(typeof arr[6])//boolean

// //update the array elements from the array list
// arr[3]='Hello'
// console.log(arr)


// //delete the array elements from the array list
// delete arr[2]
// console.log(arr)

// //to check array length
// console.log(arr.length)

// let arrLn= arr.length
// console.log(arrLn)


// wap to print only numbers from this array ['hi',100,true,'bye',200,false] by using general function



// let arr=['hi',100,true,'bye',200,false]
// for(let i=0;i<arr.length;i++){
//     if(typeof(arr[i])==='number')
//         console.log(arr[i])
// }







// let ar1=[10,22,12,13,14,15]
// for(let i=0;i<ar1.length;i++){
//     if(ar1[i]%2==0)
//         console.log(ar1[i])
// }


//array methods

// let arr=[10,20,30,40,50]
// console.log(arr)



// console.warn('Push Method')

// let p1=arr.push('Hi',true)
// console.log(arr)
// console.log(typeof p1)

// console.warn('Pop Method')
// let r1=arr.pop()
// console.log(arr)
// console.log(r1)


// arr.unshift(100)
// console.log(arr)

// arr.shift()
// console.log(arr)

//Splice Merthod

//Deleting elements from the arrya list

// let res=arr.splice(2,2)//splice(postion,delted elem,new value)
// console.log(arr)
// console.log(res)

// //adding

// arr.splice(2,0,'new1','new2')//0 th postion no deletd
// console.log(arr)


// console.warn('Update ')

// let r2=arr.splice(1,1,true)//splice(postion,delted elem,new value)
// console.log(r2)
// console.log(arr)

// let arr=[10,20,30,40,50,60]
// console.log(arr)


// for(let i=0 ; i<arr.length ;i++){
//     console.log(arr[i])
// }


// arr.map((ele)=>{
//     console.log(ele+5)
// })


// let res=arr.map((ele)=>{
//     return ele+5;
// })
// console.log(res)


// let res1=arr.map(ele=>ele+5)
// console.log(res1)


// console.log('Filter method')

// let arr1=[10,19,30,40,50,60,2,3,4,5,6,7]

// let result=arr1.filter(elem => elem%2==0)
// console.log(result)


// [Element,indexing,looping how many elements] positons



// let arr=[2,3,4,5,1,6]
// let res=arr.reduce((prvVal,curVal)=>{
//     return prvVal+curVal;
    
// })
// console.log(res)

// let res1=arr.reduce((prvVal1,curVal1)=>{
//     return prvVal1*curVal1;
// })
// console.log(res1)


// console.log(arr)

// console.warn('Assc')
// let x=arr.sort((a,b)=>{
//     return a-b;
// })
// console.log(x)

// console.warn('desc')
// let y=arr.sort((a,b)=>{
//     return b-a
// })
// console.log(y)