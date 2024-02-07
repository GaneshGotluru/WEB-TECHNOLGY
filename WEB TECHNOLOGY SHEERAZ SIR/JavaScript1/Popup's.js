// function fullName(){
//     let fname=prompt('Enter First Name: ')
//     let lname=prompt('Enter Last Name: ')

//     alert(`My Name is ${fname} ${lname}`)
// }


function fullName1(){
    let fname=prompt('Enter First Name')

    if(fname==='' || fname===null){
        let isBool=confirm('Do you Want to Close it')

        isBool ? alert('Thank You'):fullName1()
        // if(isBool){
        //     alert('Thank You')
        // }
        // else{
        //     fullName1()
        // }
    }
    else{
        alert(`my name is ${fname}`)
    }
}