function demo(){
    console.log('Hi, i m in Function')
}

function doubleClick(){
    console.log("Happy Teacher's Day ")
}


function fullName(){
    let fname=prompt("Enter a First Name")
    let Lfname=prompt("Enter a Last Name")

    console.log(`My Name is ${fname} ${Lfname}`)
}

// function addNum(){
//     let num1=Number(prompt('Enter a num 1'))
//     let num2=Number(prompt('Enter a num 2'))
    
//     console.log(n1+n2)

// }


function num(){
    let n1=Number(prompt('ENter a num 1'))
    let n2=Number(prompt('ENter a num 2'))

    let add=n1+n2
    console.log(`${n1}+${n2}=${add}`);


    let sub=n1-n2
    console.log(`${n1}-${n2}=${sub}`);


}

function evevOdd(){
    let n1=Number(prompt('ENter a num 1'))
    let n2=Number(prompt('ENter a num 2'))

    for(let i=n1;i<=n2;i++){
        if (i%2==0){
            console.log(i)
        }
    }
}



let both=function(){
    let n1=Number(prompt('ENter a num 1'))
    let n2=Number(prompt('ENter a num 2'))

    if(n1<n2){
        for(let i=n1;i<=n2;i++){
            if (i%2==0){
                console.log(i)
            }
        }
    }
    else if(n1>n2){
        for(let i=n1;i>=n2;i--){
            if (i%2==0){
                console.log(i)
            }
        }
    }
}


function key1(){
    console.log('Data Entered')
}
function key2(){
    console.log('Data ')
}
function key3(){
    console.log('Released')
}

function MouseEvent(){
    console.log('Hi ✋✋✋')
}