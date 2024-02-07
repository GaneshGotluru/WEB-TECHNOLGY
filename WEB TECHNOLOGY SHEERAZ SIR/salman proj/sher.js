function changeimg()
{
    let arr=new Array()
    arr[0]=['./img/c2.jfif']
    arr[1]=["./img/s1.jpg"]
    arr[2]=["./img/c3.jfif"]
    arr[3]=["./img/c3.jfif"]
    var number = Math.floor(Math.random()*arr.length);  
    let ele=document.getElementsByTagName('img')
    ele[0].src=arr[number];  
}
const clock_div=document.querySelector(".clock-div")
setInterval(()=>{
    let time=new Date()
    let h=time.getHours()
    let m=time.getMinutes()
    let s=time.getSeconds()
    clock_div.innerHTML=`${h}:${m}:${s}`;
})
const c_date=document.querySelector(".date")
let res=(()=>{
    let dmy=new Date()
    let d=dmy.getDate()
    let m=dmy.getMonth()
    let arr=['jan','feb','mar','apr','may','jun','july','aug','sep','oct','nov','dec']
    let y=dmy.getFullYear()
    c_date.innerHTML=`${d}/${arr[m]}/${y}`
})()

const d_day=document.querySelector(".day")
let res1=(()=>{
    let dd=new Date()
    let arr=["sunday","monday","tuesday","wedensday","thursday","friday","saturday"]
    let day=dd.getDay()
    d_day.innerHTML=arr[day]
})()

function validation(event){
let i=document.querySelectorAll('input')[0].value
console.log(i)
let j=document.querySelectorAll('input')[1].value
if(i=='Ganesh' && j=='Gani@123')
{
   window.open("home.html")
}
else{
    let d=document.getElementById("text")
    d.innerHTML="wrong password"
}
event.preventDefault()
}