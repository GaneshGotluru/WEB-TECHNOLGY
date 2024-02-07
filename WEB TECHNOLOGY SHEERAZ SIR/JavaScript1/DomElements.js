function demo(){
   let selectedElem= document.getElementsByClassName('box');
//    console.log(selectedElem[0]);
selectedElem[0].innerText=`Welcome`
// selectedElem[0].style.cssText=`text-align:center`
selectedElem[1].style.cssText='background:red; border-radius:50%'


let selectedImg=document.getElementsByTagName('img');
selectedImg[0].src='../CSS/freeze/img/yogurt.jpg'


}


function doubleclick(){

    let selectedElem1=document.getElementsByClassName('box')
    selectedElem1[0].innerText=`JavaScript`
    selectedElem1[1].style.cssText='background:blue; border-radius:50%'

    let selectedImg1=document.getElementsByTagName('img')
    selectedImg1[0].src=`../PROJECTS/IMAGES/app1.png`
}



function printdata(event){
    let fname=document.getElementsByName('fnm')[0].value
    let lname=document.getElementsByName('lnm')[0].value
    
    let displaydata=document.getElementById('res')

    displaydata.innerText=`My name is ${fname} ${lname}`

    event.preventDefault()
}


// function pt(){
//     let fname=prompt('Enter fname')
//     let lname=prompt('Enter lname')

//     let fullname=document.getElementById('ss')
//     fullname.innerText=`My Name is ${fname} ${lname}`

//     fullname.style.cssText=`color:red;
//                             background:yellow;
//                             text-align:center;`
// }

function colorr(){
    let x= prompt('Enter a color')
    let y=document.getElementsByTagName('body')
    // console.log(y)
    y[0].style=`background-color:${x}`
}


function hexa(){
    let a=prompt('Enter a Hexa Decimal code')

    let b=document.getElementsByTagName('body')

    b[0].style=`background-color:${a}`
}



function rgb(){
    let j=prompt('Enter a rgb values')

    let k=document.getElementsByTagName('body')

    k[0].style=`background-color:${j}`
}


function displayColor(){
//     let color=prompt('enter a color')
//     let selectedElem=document.getElementsByTagName('body')
//     selectedElem[0].style.background=color


    // let color=prompt('enter a color')
    // document.getElementsByTagName('body')[0].style.background=color

    
    // document.getElementsByTagName('body')[0].style.background=prompt('enter a color')


    document.body.style.background=prompt('enter a color')
}


// function cs(){
//     let collect=prompt('Enter a color')

//     let some=document.getElementsByClassName('r1')
//     console.log(some)
//     some[0].style.background=collect
//     some[0].style.inerhtm=collect
// }
// function cs(){
//     let collect1=prompt('Enter a color')

//     let some=document.getElementsByClassName('b1')
//     console.log(some)
//     some[1].style.background=collect1
// }

function displayColor(){
    let color=prompt('Enter Color Name')
    let x=document.getElementsByTagName('td')

    switch(color){
        case"red":x[0].style.background='red'
            break;
        case'blue':x[1].style.background='blue'
            break;
        case'orange':x[2].style.background='orange'
            break;
        case'yellow':x[3].style.background='yellow'
            break;
        case'green':x[4].style.background='green'
            break;
        case'block':x[5].style.background='block'
                    
            break;


        default: alert('Invalid Color')

        
    }
}