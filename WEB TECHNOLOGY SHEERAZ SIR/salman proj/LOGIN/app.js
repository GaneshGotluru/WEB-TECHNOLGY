function loginPage(event){

    // let elements=document.getElementsByTagName('input')
    // console.log(elements)
    let fname=event.target[0].value
    let lname=event.target[1].value
    // console.log(fname,lname)


    if(fname==='Gotluru'&& lname==='Ganesh'){
        window.location='./facebk.html'
    }
    else{
        let errorMsz=document.createElement('h2')
        errorMsz.innerText='Enter Proper Credentials'
        errorMsz.style.cssText=`color:red`

        document.body.appendChild(errorMsz)
    }


    event.preventDefault()
}