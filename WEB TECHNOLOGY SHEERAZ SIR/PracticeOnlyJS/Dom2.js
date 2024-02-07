function btnVal(){
    let select= document.querySelector('button').innerText
    console.log(select)

    if(select==='Day Mode'){
        document.querySelector('button').innerText='Night mode'
        document.body.style.background='black'
    }
    else{
        document.querySelector('button').innerText='Day Mode'
        document.body.style.background='white'
    }
}