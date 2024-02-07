// function generateOTP(){
//     let randomNum=Math.random()
// }

console.warn('Generate OTP')
function generateOTP(){
    let randomNum=Math.random()*10000
    let otp=Math.floor(randomNum)
    // console.log(otp)

    if(otp >=1000 && otp<10000){
        console.log(otp)
    }
    else{
        generateOTP()
    }
    
}
generateOTP()



// function generateOTP(){
//     let otp=Math.floor(Math.random()*10000);
//     (otp>=1000 && otp<10000)? console.log(otp):generateOTP;
// }
// generateOTP()