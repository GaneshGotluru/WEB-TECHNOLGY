// let al=alert('Hello Tpty')
// console.log(al)//undefined

// let vss=confirm("Hey i am in bangalore")
// console.log(vss)


// let inp=prompt('Enter a name: ')
// console.log(inp)
// console.log(typeof inp)



//----------Timing Functions------------//

// function demo(){
//     console.log('Hello Sir, I am Ganesh')
// }


function changeContent(){
    let selectedElem=document.getElementById('msz')
    // console.log(selectedElem)

    selectedElem.innerHTML='Good Night'
    selectedElem.style.cssText=`color:blue;
                                background:red`
}

function printname(){
    let fname=prompt('enter a first name')
    let lname=prompt('enter a last name')
    let selectedElem= document.getElementById('sss')
    selectedElem.innerText=`my name is ${fname} ${lname}`
    selectedElem.style.cssText=`color:red`
    
    // console.log(selectedElem)
}


function demo(){
    console.log('Ganesh')
}