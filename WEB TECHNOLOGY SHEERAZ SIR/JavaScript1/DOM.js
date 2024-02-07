function changeContent(){
    let selectedElem=document.getElementById('msz')
    selectedElem.innerText='Good Night'
    selectedElem.style.color='blue'
}



// function changeContent(){
//     let selectedElem=document.getElementById('msz')
//     // selectedElem.innerText='Good Night'
// }



function pt(){
    let fname=prompt('Enter fname')
    let lname=prompt('Enter lname')

    let fullname=document.getElementById('ss')
    fullname.innerText=`My Name is ${fname} ${lname}`

    fullname.style.cssText=`color:red;
                            background:yellow;
                            text-align:center;`
}