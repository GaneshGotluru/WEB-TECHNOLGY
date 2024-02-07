function validation(event){
    let fname=event.target[0].value
    let lname=event.target[1].value
    // console.log(fname,lname);

    let inputField=document.getElementsByTagName('input')
    let errMsz=document.getElementsByTagName('span')

    if(fname === '' || fname===null){
        // let x=document.getElementsByName('fnm')
        // x[0].style.border='solid 1px red'
        inputField[0].style.border='solid 1px red'

        //error msz
        errMsz[0].innerText='This field is empty'
        errMsz[0].style.cssText=`color:red; font-style:italic`      


    } 
    else if(lname===''|| lname===null){
        inputField[1].style.border='solid 1px red'
        errMsz[1].innerText='This field is empty'
        errMsz[1].style.cssText=`color:red; font-style:italic`   
    }

    
    event.preventDefault()
}

 