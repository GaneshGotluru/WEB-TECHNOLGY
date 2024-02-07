function off(){
    let x=document.getElementsByTagName('img')
    // console.log(x)
    x[0].src='./img/bulb off1.jpg'
}



function on(){
    let x=document.getElementsByTagName('img')
    // console.log(x)
    x[0].src='./img/bulb on.jpg'
}

function doubleclick(){

    let selectedElem1=document.getElementsByClassName('box')
    selectedElem1[0].innerText=`JavaScript`
    selectedElem1[1].style.cssText='background:blue; border-radius:50%'

    let selectedImg1=document.getElementsByTagName('img')
    selectedImg1[0].src=`../PROJECTS/IMAGES/app1.png`
}



function btnValue(){
    let a=document.querySelector('button').innerText
    // console.log(a)
    if(a==='Day Mode'){
        document.querySelector('button').innerText='Night Mode'
        document.body.style.background='black'
        
    }
    else{
        document.querySelector('button').innerText='Day Mode'
        document.body.style.background='white' 
    }
}



// function he(){
//     let x=document.getElementsByTagName('button')
//     console.log(x)
//     // x[0].classList.toggle('off')
// }