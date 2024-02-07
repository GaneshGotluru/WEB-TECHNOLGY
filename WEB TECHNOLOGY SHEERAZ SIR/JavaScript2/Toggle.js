function onOff(){
    let c=document.getElementsByTagName('button')
    // console.log(c)
    // c[0].classList.toggle('buton')

    let res=c[0].classList.toggle('added')
    res ? c[0].innerText='OFF' : c[0].innerText="ON";
    // res ? document.body.style.cssText=' color:white ; background:black' :document.body.style.cssText='background:white';
    if(res){
        document.body.style.cssText=' color:white ; background:black'
    }
    else{
        document.body.style.cssText='background:white'
    }
}



function newElement(){
    let tagName = prompt('Enter Tag Name ')

    let newElem=document.createElement(tagName)

    newElem.innerText= prompt('Enter Data to Display')

    document.body.appendChild(newElem)
}

function newTag(event){
    let tagName =document.createElement('TagName')[0].value
    let enteredData =document.getElementsByName('data')[0].value

    let newElem=document.createElement(tagName)

    newElem.innerText=enteredData
    document.body.appendChild(newElem)

    // let displaying=document.getElementById('res')
    // displaying.innerText= `content's are ${dis1} ${dis2}`

    event.preventDefault()

}



// function printdata(event){
//     let fname=document.getElementsByName('fnm')[0].value
//     let lname=document.getElementsByName('lnm')[0].value

//     let displaydata=document.getElementById('res')

//     displaydata.innerText=`My name is ${fname} ${lname}`

//     event.preventDefault()
// }