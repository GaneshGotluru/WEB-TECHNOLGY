// let obj={}
// console.log(obj)
// console.log(typeof obj)


// let car={
// 	cName:'Tata',
// 	cColor:'white',
// 	cMilage:32

// };
// console.log(car)
// console.log(typeof car)

// console.log(car.cColor)
// console.log(car.cName)

// console.log(car['cMilage'])

// car.carReg='Ap-02-ap-2020'
// console.log(car)

// car['Cname']='My'
// console.log(car)

// delete car.Cname
// console.log(car)


// let oj= Object()
// console.log(oj)
// console.log(typeof oj)

// oj= new Number()
// console.log(oj)
// console.log(typeof oj)

// oj= new String()
// console.log(oj)
// console.log(typeof oj)

// oj=new Boolean()
// console.log(oj)
// console.log(typeof oj)

// console.warn('Constructor Function')

// function names(){
// 	this.fname='Ganesh'
// 	this.lname='Gotluru'


// }
// let o1= new names()
// console.log(o1)
// console.log(typeof o1)


// let personObj={
// 	fname:'Dinga',
// 	lname:'Raja',
// 	dob:2002,
// 	fullName:function(){
// 		let res=`my name is ${this.fname} ${this.lname}`
// 		console.log(res)
// 	},
// 	calculateAge:function(){
// 		let curYear= new Date()
	
// 		// console.log(curYear)
// 		// console.log(typeof curYear)

// 		let yearS= curYear.getFullYear()
// 		console.log(yearS)
// 		let age=yearS-this.dob
// 		console.log(age)
// 	}
// }

// console.log(personObj)
// personObj.fullName()
// personObj.calculateAge()




// console.warn('Date object Model')

// function date(){
// 	let datee= new Date()
// 	console.log(datee)
// 	console.log(typeof datee)

// 	console.log(datee.getDate())
// 	console.log(datee.getDay())
// 	console.log(datee.getHours())
// 	console.log(datee.getMonth()+1)
// 	console.log(datee.toDateString())
// 	console.log(datee.toLocaleDateString())

// }
// date()


// console.warn('Math Functions')

// function large(){
// 	let x=Math.min(1,3,5,63,2,2,5,7,888,9,5,11,23,0,4)
// 	console.log(x)
// }
// large()

// let por=function (x,y){
// 	let a=Math.pow(x,y)
// 	return a;

// }
// // console.log(por(2,3))

// console.warn('Rest and spread operator')
// function demo(...a){//(rest operator)
//     console.log(a)//[10, 20, 30, 50, 40]
//     console.log(...a)//10 20 30 50 40 (spread ope)
// }
// demo(10,20,30,50,40)


// function num(...s){
//     let res=Math.max(s)//Here it passing array form so getting NaN output
//     console.log(res)
//     let maxres=Math.max(...s)//Here it passing values form so getting  output 3333
    
//     console.log(maxres) //3333
// }
// num(3,4,5,6,788,9,94,3,3333,)



// function generateOTP(){
// 	let randomNum=Math.random()*10000
// 	// console.log(randomNum)
// 	let OTP=Math.floor(randomNum)
// 	// console.log(OTP)

// 	if(OTP>1000 && OTP<10000){
// 		console.log(OTP)
// 	}
// 	else{
// 		generateOTP()
// 	}
// }
// generateOTP()



// function generateOTP(){
//     let otp=Math.floor(Math.random()*10000);
//     (otp>=1000 && otp<10000)? console.log(otp):generateOTP;
// }
// generateOTP()


console.warn('DOM')


// function changeContent(){
// 	let selectedElem = document.getElementById('msz')
// 	console.log(selectedElem)

// }